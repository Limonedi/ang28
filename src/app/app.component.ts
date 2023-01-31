import { Component } from '@angular/core';
const login = (username: string, password: string) => {
  if (!username || !password) {
    return { error: "Username and password are required." };
  }

  if (username === "user" && password === "pass") {
    return { success: true };
  } else {
    return { error: "Invalid username or password." };
  }
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't28';

  username = "";
  password = "";
  error = "";
  success = false;

  onSubmit() {
    const result = login(this.username, this.password);
    if (result.error) {
      this.error = result.error;
      this.success = false;
    } else {
      this.error = "";
      this.success = true;
    }
  }
}


