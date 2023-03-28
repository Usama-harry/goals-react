class GoalModel {
  constructor(id, text, priorty) {
    this.id = id;
    this.text = text;
    this.priorty = priorty;
    this.date = new Date();
  }
}

export default GoalModel;
