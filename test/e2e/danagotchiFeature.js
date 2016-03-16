describe('Danagotchi', function(){
  it("displays the page title and 'Hello World'", function(){
    browser.get('http://localhost:8080');
    element(by.id('username')).sendKeys("Ina");
    element(by.buttonText('Submit')).click();
    expect(browser.getTitle()).toEqual('DANAGOTCHI');
    expect(element(by.id('greeting')).getText()).toBe('Hello Ina!');
  });
});
