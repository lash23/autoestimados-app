import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstimationServicesService } from '../../services/estimation-services.service';
declare let $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  dropzoneFiles: File[] = [];
  estimationForm: FormGroup;
  logos = [
    {
      img: "../../../assets/img/partners/hojalateria del este.png",
      width: "170px"
    },
    {
      img: "../../../assets/img/partners/groobay-white.png",
      width: "140px"
    }
  ]
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private estimationServicesService: EstimationServicesService
  ) { }

  ngOnInit(): void {
    this.initEstimationForm();
  }

  onDropzoneChange(event: any) {
    console.log('event.addedFiles', event.addedFiles);
    
    this.dropzoneFiles.push(...event.addedFiles);
    this.estimationForm.controls.images.setValue(this.dropzoneFiles)
    console.log('estimationForm', this.estimationForm.controls.images.value);
    
  }

  onDropzoneRemove(event: any) {
    this.dropzoneFiles.splice(this.dropzoneFiles.indexOf(event), 1);
  }

  initEstimationForm() {
    this.estimationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      images: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    })
  }

  requestEstimation() {
    return this.estimationServicesService.requestEstimation(this.estimationForm.value).subscribe((res) => {
      console.log(res);
      this.showSuccess();
    }, err => {
      console.log('err', err);
    })
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  goChat() {}
}
