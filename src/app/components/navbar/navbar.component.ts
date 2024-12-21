import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false; // Controla o fundo da navbar
  menuOpen = false;   // Controla o estado do menu
  menuIcon = '../../../assets/toggle_btn.png'; // Ícone inicial do menu
  menuRotateClass = '';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menuIcon = this.menuOpen ? '../../../assets/close_btn.png' : '../../../assets/toggle_btn.png';

    this.menuRotateClass = 'rotate';

    setTimeout(() => {
      this.menuRotateClass = '';
    }, 600);

    this.updateNavbarBackground();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.menuIcon = '../../../assets/toggle_btn.png';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateNavbarBackground();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (window.screen.width > 768) {
      console.log('window.screen.width: ' + window.screen.width);
      this.menuOpen = false;
      this.menuIcon = '../../../assets/toggle_btn.png';
    }
    this.updateNavbarBackground();
  }

  private updateNavbarBackground(): void {
    this.isScrolled = window.scrollY > 50 || this.menuOpen;
  }
}
