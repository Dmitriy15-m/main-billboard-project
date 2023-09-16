import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfilePasswordComponent } from './components/profile-password/profile-password.component';

@NgModule({
  declarations: [ProfileSettingsComponent, ProfileInfoComponent, ProfilePasswordComponent],
  imports: [CommonModule, ProfileSettingRoutingModule],
  exports: [ProfileSettingsComponent, ProfileInfoComponent, ProfilePasswordComponent]
})
export class ProfileSettingModule {}
