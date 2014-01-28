describe("app", function() {
  document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" ></script>');

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

  it("#_uuid", function() {
    expect(app._uuid()).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });

  describe('#_config', function(){

    beforeEach(function(){
      app._config.array();
    })

    it('#array', function(){
      var result = "";
      ['-3', '4', 'example'].each(function(item){
        result = result + item;
      })
      expect(result).toEqual('-34example');
    })

    it('#any', function(){
      expect(['-3', '4', 'example'].any()).toEqual(true);
    })

    it('#empty', function(){
      expect([].empty()).toEqual(true);
    })

    it('#equal', function(){
      expect([1, '2', 3].equal([1, 3])).toEqual(false);
      expect([1, '2', 3].equal([1, '2', 3])).toEqual(true);
    })

    it('#erase', function(){
      expect([1, '2', 3].erase()).toEqual([]);
    })

    it('#last', function(){
      expect([1, '2', 3].last()).toEqual(3);
      expect([1].last()).toEqual(1);
      expect([].last()).toEqual(undefined);
    })

    it('#first', function(){
      expect([1, '2', 3].first()).toEqual(1);
      expect([1].first()).toEqual(1);
      expect([].first()).toEqual(undefined);
    })

  });

  describe('#_ajax', function(){
    it('#addEvent', function(){
      app._ajax.addEvent.lockAfterClick();
    })
  })

});
