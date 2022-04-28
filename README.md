# JAVA TEST

Q1/ Dans la classe ProjectBean, la méthode getDurationToString(String) n'a pas été implémenté. Nous devons soit la supprimer de ProjectGenericBean, soit l'implémenter dans ProjectBean.

Q2/ pbc1: Correct
    pbc2: Correct
    pbc3: Incorrect
Je préfere la premiére méthode, la seconde peut lever une exception si le cast est impossible.

Q3/ The attribute "etat" will have his default value, which is public. This class have no getter and no setter methode for "etat".

Q4/ ProjectGenericBean is the abstract class that have the methode that should be implemented in the classes that extends ProjectGenericBean.
    ProjectBean extends ProjectGenericBean so he should implements the methods getBean, getDuration(), getDurationToString(), getDurationToString(String       flag), saveBean.
    ProjectBeanCustom extends ProjectBean,so he inherit the attributes and methodes of ProjectBean.
    So the sequence of these constructors are ProjectGenericBean then projectBean then projectBeanCustom.
    
Q5/ Calendar calendar = Calendar.getInstance();
    Date today = calendar.getTime();
    Date date = new Date(11)
    ObjectMapper mapper = new ObjectMapper();
    ProjectBeanCustom data = new ProjectBeancustom("Project Recrutement", 10, today, date, "GOING");
    String myJson = mapper.writeValueAsString(data);

    HttpSession session = request.getSession()   // We should have the request
    projectBean.saveBean(session, myJson, data);
    
Q6/ It will display whether the string version of (BasicBean) type.getDeclaredConstructor(HttpSession.class).newInstance(session) or the string version of     (BasicBean) type.getDeclaredConstructor(String.class, HttpSession.class).newInstance(id, session);

Q7/ public String getDurationToString(String flag){    
      switch(flag){
          case "YEAR":
              return this.getDuration().getYears();
              break;
          case "MONTH":
              return this.getDuration().getMonths();
              break;
          case "DAY":
              return this.getDuration().getDays();
              break;
          default:
              return "Incorrect value of flag";
              break;
  }
