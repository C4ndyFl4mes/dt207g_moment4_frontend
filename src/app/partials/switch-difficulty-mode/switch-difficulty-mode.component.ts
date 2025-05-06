import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-difficulty-mode',
  imports: [],
  templateUrl: './switch-difficulty-mode.component.html',
  styleUrl: './switch-difficulty-mode.component.scss'
})
export class SwitchDifficultyModeComponent {
  @Output() radio: EventEmitter<string> = new EventEmitter<string>();

  public onChange(event: Event): void {
    const radioButton = event.target as HTMLInputElement;
    this.radio.emit(radioButton.value);
  }
}
