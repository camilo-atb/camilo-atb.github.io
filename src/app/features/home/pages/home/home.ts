import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Navbar } from '../../../../shared/navbar/navbar';
import { AccessibilityButton } from '../../../../shared/accessibility-button/accessibility-button';
import { Stacks } from '../../components/stacks/stacks';
import { Experience } from '../../components/experience/experience';
import { Certifications } from '../../components/certifications/certifications';
import { MilestonesAndParticipation } from '../../components/milestones-and-participation/milestones-and-participation';
import { ContactPreview } from '../../components/contact-preview/contact-preview';

@Component({
  imports: [Hero, About, Navbar, AccessibilityButton, Stacks, Experience, Certifications, MilestonesAndParticipation, ContactPreview],
  templateUrl: './home.html',
})
export class Home {

}
