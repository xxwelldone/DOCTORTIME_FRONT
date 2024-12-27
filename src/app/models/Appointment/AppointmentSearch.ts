export class AppointmentSearch {
  public DoctorID: string;
  public modality: string;
  public date: Date;

  constructor(DoctorID: string, modality: string, date: Date) {
    this.DoctorID = DoctorID;
    this.date = date;
    this.modality = modality;
  }
}
