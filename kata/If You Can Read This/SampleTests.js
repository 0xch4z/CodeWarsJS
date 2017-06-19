
describe("Solution", function(){
  it("Should return a correctly translated string", function(){
    Test.assertEquals(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
    Test.assertEquals(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
    Test.assertEquals(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");
  });
});
