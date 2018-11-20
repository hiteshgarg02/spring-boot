import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { first } from 'rxjs/operators';
import { Account } from '../model/account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  @Input() formData: Account;
  @Output() updated: any = new EventEmitter<any>();
  account: Account;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      accountId: [],
      accountName: ['', Validators.required],
      bankName: ['', Validators.required],
      email: ['', Validators.required]
    });
    delete this.formData['deleted'];
    delete this.formData['isDeleted'];
    this.editForm.setValue(this.formData);
    
  }

  onUpdate() {
    this.accountService.updateAccount(this.editForm.value)
    .pipe(first())
    .subscribe(res => {
      this.updated.emit();
    },
    error => {
        alert('error');
    });
  }
}
