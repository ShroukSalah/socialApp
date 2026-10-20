import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { User } from '../../../../auth/models/user-data.interface';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly authService = inject(AuthService)
    private readonly cdr = inject(ChangeDetectorRef);

  userData!: User ;
  ngOnInit() {
    this.authService.getProfile().subscribe({
      next: (res) => {
        // this.userData = res?.data?.user 
        // console.log(res.data.user)

        this.userData = { ...res.data.user };

        console.log('Assigned userData:', this.userData);

        this.cdr.detectChanges();
      }
    })
  }

}
