var expect = chai.expect;

describe("App JS Object", function() {
  it('should be defined', function() {
    expect(window.App).to.not.be.undefined;
  });
  it('should have data', function() {
    expect(window.App.data).to.eql(testData.test1);
  });
});
