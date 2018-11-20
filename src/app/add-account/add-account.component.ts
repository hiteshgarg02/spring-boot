import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  addForm: FormGroup;

  constructor(private router: Router, private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      accountId: [],
      accountName: ['', Validators.required],
      bankName: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required]))
    });
  }

  onCreate() {
    this.accountService.addAccount(this.addForm.value).subscribe(res => {
      this.router.navigate(['list-account']);
    });
  }

}
