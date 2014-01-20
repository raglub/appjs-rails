describe("app", function() {

  beforeEach(function() {
    app._addSingleton('example', function(){});
  });

  it("should be able to create example singleton", function() {
    expect(app.example).not.toEqual(undefined);
  });

  it("should generate an uuid", function() {
    expect(app._uuid()).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });

});
