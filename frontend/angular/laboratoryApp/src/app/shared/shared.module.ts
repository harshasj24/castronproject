import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material';
import { ModalComponent } from './components/modal/modal.component';
import { ImgLocationPipe } from './pipes/img-location.pipe';

@NgModule({
  declarations: [HeaderComponent, ModalComponent, ImgLocationPipe],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent,ImgLocationPipe],
})
export class SharedModule {}
