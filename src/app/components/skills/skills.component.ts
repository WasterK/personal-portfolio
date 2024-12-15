import { Component, ElementRef, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'; // For accordion
import { MatIconModule } from '@angular/material/icon'; // For icons
import { MatButtonModule } from '@angular/material/button'; // For buttons if needed

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
}
