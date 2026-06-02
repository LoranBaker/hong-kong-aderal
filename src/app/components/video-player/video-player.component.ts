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
    v.muted = true;
    v.play().catch(() => {});
  }
}