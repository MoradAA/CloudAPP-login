import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ToastController } from '@ionic/angular';
import {HomePage} from '../home/home.page'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})

export class LobbyPage implements OnInit {

  home:any;

  //show team settings page and hides the lobby buttons 
  lobbyPage:boolean=true;
  teamPage:boolean=false;

  teamName:string;
  member1Name:string;
  member2Name:string;
  member3Name:string;
  member4Name:string;
  member5Name:string;

  //input fields for members are not shown, only the first one is visible
  member1:boolean=true;
  member2:boolean=false;
  member3:boolean=false;
  member4:boolean=false;
  member5:boolean=false;
  memberFlag:number=1;

  //disable buttons depending on the amount of members (max 5 members, minumum 1 member)
  buttonAddMember:boolean=false;
  buttonRemoveMember:boolean=true;

  constructor(private router:Router, public toastController: ToastController, public auth: AuthService) 
  {
    this.home = new HomePage(this.router, this.auth);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  //method for opening the team settings page (hides the default lobby buttons)
  openTeamSettings=()=>{
    this.lobbyPage=false;
    this.teamPage=true;    
  }

  //method for closing the team settings page and deletes input fields if nothing is written there(shows the default lobby buttons)
  closeTeamSettings=()=>{
    this.lobbyPage=true;
    this.teamPage=false;
    this.presentToast();
  }

  addMember=()=>{
    this.memberFlag++;
    this.showMembers();
    this.buttonRemoveMember=false;
    if(this.memberFlag==5){
       this.buttonAddMember=true;
    }
    else this.buttonAddMember=false;   
  }

  removeMember=()=>{
   this.memberFlag--;
   this.showMembers();
   this.buttonAddMember=false;
   if(this.memberFlag==1){
      this.buttonRemoveMember=true;
    }
  else this.buttonRemoveMember=false;
  }

  //this methods shows the members depending on the memberFlag. It also deletes the values of the input fields (if you go from 5 members to 4, the name of member 5 will be deleted)
  showMembers=()=>{
    switch(this.memberFlag){
      case 1:
        this.member1=true;
        this.member2=false;
        this.member3=false;
        this.member4=false;
        this.member5=false

        this.member2Name="";
        this.member3Name="";
        this.member4Name="";
        this.member5Name="";
        break;
      case 2:
        this.member1=true;
        this.member2=true;
        this.member3=false;
        this.member4=false;
        this.member5=false

        this.member3Name="";
        this.member4Name="";
        this.member5Name="";
        break;
      case 3:
        this.member1=true;
        this.member2=true;
        this.member3=true;
        this.member4=false;
        this.member5=false

        this.member4Name="";
        this.member5Name="";
        break;
      case 4:
        this.member1=true;
        this.member2=true;
        this.member3=true;
        this.member4=true;
        this.member5=false

        this.member5Name="";
        break;
      case 5:
        this.member1=true;
        this.member2=true;
        this.member3=true;
        this.member4=true;
        this.member5=true
       break;
    }
  }

  ngOnInit() {
  }


}
