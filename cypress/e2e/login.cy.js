describe("Giriş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Başarılı giriş yapılabiliyor", () => {
    cy.gets('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').should("not.be.disabled").click();
    cy.url().should("include", "/main");
  });

  it("Yanlış email girildiğinde hata mesajı çıkıyor", () => {
    cy.get('input[name="email"]').type("yanlisemail");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.contains("Lütfen geçerli bir e-posta adresi girin").should("be.visible");
  });

  it("Şifre kısa girildiğinde hata mesajı çıkıyor", () => {
    cy.get('input[name="password"]').type("12");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.contains("Şifre en az 4 karakter olmalıdır").should("be.visible");
  });

  it("Hem email hem şifre yanlış girildiğinde 2 hata mesajı gösteriyor", () => {
    cy.get('input[name="email"]').type("yanlisemail");
    cy.get('input[name="password"]').type("12");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(".invalid-feedback").should("have.length", 2);
  });

  it("Kullanıcı kuralları kabul etmezse giriş yapılamıyor", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('button[type="submit"]').should("be.disabled");
  });
});
