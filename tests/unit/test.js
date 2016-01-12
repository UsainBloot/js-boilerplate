var expect = chai.expect;

describe("App JS Object", function() {
  it('should be defined', function() {
    expect(window.app).to.not.be.undefined;
  });
  it('should have data', function() {
    expect(window.app.data).to.eql(testData.test1);
  });
});
