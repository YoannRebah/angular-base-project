import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TvProgramService } from '../../../shared/services/tv-program.service';
import { TimeCounterService } from '../../../shared/services/time-counter.service';
import { VhsEffectService } from '../../../shared/services/vhs-effect.service';

@Component({
  selector: 'app-tv-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-program.component.html',
  styleUrls: ['./tv-program.component.scss']
})
export class TvProgramComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  private timeCounterSubscription!: Subscription;
  timeFromTimerCounterService: number = 0;
  videoDurationTime: number = 227;
  maxTimeBeforeShowTvProgram: number = 600;
  maxTimeBeforeHideTvProgram: number = this.maxTimeBeforeShowTvProgram + this.videoDurationTime;

  constructor(
    private tvProgramService: TvProgramService,
    private timeCounterService: TimeCounterService,
    private vhsEffectService: VhsEffectService
  ) {}

  @ViewChild('tvProgramVideo') tvProgramVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.timeCounterSubscription = this.timeCounterService.time$.subscribe(time => {
      this.timeFromTimerCounterService = time;
      if (this.timeFromTimerCounterService >= this.maxTimeBeforeShowTvProgram && this.timeFromTimerCounterService < this.maxTimeBeforeHideTvProgram) {
        this.show();
      } else {
        this.hide();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timeCounterSubscription) {
      this.timeCounterSubscription.unsubscribe();
    }
  }

  show(): void {
    this.isVisible = true;
    this.tvProgramService.show();
    this.playVideo();
    this.hideVhsEffectFooter();
  }

  hide(): void {
    this.isVisible = false;
    this.tvProgramService.hide();
    this.showVhsEffectFooter();
  }

  playVideo(): void {
    if (this.tvProgramVideo && this.tvProgramVideo.nativeElement) {
      this.tvProgramVideo.nativeElement.play();
    }
  }

  onClickHideVideo(): void {
    this.hide();
    this.resetTimeCounter();
  }

  resetTimeCounter(): void {
    this.timeCounterService.reset();
  }

  showVhsEffectFooter(): void {
    this.vhsEffectService.showFooter();
  }

  hideVhsEffectFooter(): void {
    this.vhsEffectService.hideFooter();
  }

}