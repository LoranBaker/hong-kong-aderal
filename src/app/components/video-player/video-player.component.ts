import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() src = 'assets/hero.mp4';
  @Input() poster = '';

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const v = this.videoRef.nativeElement;

    // Required for iOS autoplay
    v.muted = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');

    // Try to play, retry once on failure (handles mobile timing issues)
    const tryPlay = () => {
      v.play().catch(() => {
        setTimeout(() => v.play().catch(() => {}), 500);
      });
    };

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('loadeddata', tryPlay, { once: true });
      v.addEventListener('canplay', tryPlay, { once: true });
    }
  }
}