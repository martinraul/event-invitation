const URL = "192.168.0.102:8080";

context("event-invitation", () => {
  before(() => {
    cy.visit(URL);
  });
  it("makes sure there is a FORM", () => {
    cy.get("#form").find("#user-name");
    cy.get("#form").find("#user-surname");
    cy.get("#form").find("#user-mail");
    cy.get("#form").find("#user-age");
  });
  it("makes sure there is a IMAGE", () => {
    cy.get("img");
  });

  it("makes sure there is a EMPTY FIELDS WARNING", () => {
    cy.get("#join-button").click();
    cy.get("#errors").find("li:nth-child(1)");
    cy.get("#errors").find("li:nth-child(2)");
    cy.get("#errors").find("li:nth-child(3)");
    cy.get("#errors").find("li:nth-child(4)");
  });
  it("makes sure EMPTY FIELDS WARNING DISSAPEAR when focus on form, but still BORDER RED", () => {
    cy.get("#user-name").type("john");
    cy.get("#form > input").should("have.class", "error");
    cy.get("#errors").find("li:nth-child(1)").should("not.exist");
    cy.get("#user-name").type("{selectall}", "{del}");
  });
  it("Type into EMAIL input", () => {
    cy.get("#user-mail")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}")
      .type("{ctrl}{control}")
      .type("{meta}{command}{cmd}")
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com")
      .type("{backspace}");
  });

  it("Fill in the fORM and submit it", () => {
    cy.get("#user-name").type("john");
    cy.get("#user-surname").type("reed");
    cy.get("#user-mail").type("john.reed@gmail.com");
    cy.get("#user-age").type("34");
    cy.get("#join-button").click();
    cy.get("#results").should("have.class", "alert alert-success");
  });
});
