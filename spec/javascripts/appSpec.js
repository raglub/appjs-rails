describe("app", function() {

  describe("#_singleton", function() {
    it("should be able to create example singleton without initialize", function() {
      app._singleton.add('singletonAdd', function(){});
      expect(app.singletonAdd).not.toEqual(undefined);
    });

    it("should be able to create example singleton with initialize", function() {
      app._singleton.init('singletonInit', function(){return {toString: "Init"}});
      expect(app.singletonInit['toString']).toEqual('Init');
    });
  });

  it("should generate an uuid", function() {
    expect(app._uuid()).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });
});
