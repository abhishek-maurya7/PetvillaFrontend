import { Component } from '@angular/core';
import { PetsAdminService } from '../../../service/admin/pets.admin.service';
import { PetList } from '../../../models/PetList';

@Component({
  selector: 'app-pets.admin',
  templateUrl: './pets.admin.component.html',
  styleUrl: './pets.admin.component.css'
})
export class PetsAdminComponent {
  constructor(private petsAdminService:PetsAdminService){}

  storedResponse: string | null = null;
  petsModel: any;

  ngOnInit() {
    this.petsAdminService.showPets().subscribe({
      next: (response) => this.petsModel= response,
      error: (error) => console.log(error)
    })
  }

  newPetModel = new PetList(0, "Dog", "Marrcos", "Labrador", "brown", "ashdfuhashu asdu hfd huasdsd fasdsf", "2024-01-21", 562);
  create() {
    this.petsAdminService.create(this.newPetModel).subscribe({
      next: (response) => this.petsModel.push(response),
      error: (error) => console.log(error)
    })
  }

  delete(petId: number) {
    this.petsAdminService.delete(petId).subscribe({
      next: (response) => {
        this.petsModel= this.petsModel.filter((pet: { petId: number }) => pet.petId !== petId);
        console.log(response);
      },
      error: (error) => console.log(error)
    });
  }
}
