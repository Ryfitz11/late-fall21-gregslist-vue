export class Job {
  constructor(jobData = {}) {
    this.id = jobData.id
    this.company = jobData.company
    this.position = jobData.position
    this.salary = jobData.salary
    this.description = jobData.description
    this.creatorId = jobData.creatorId
    this.creator = jobData.creator || {}
  }
}