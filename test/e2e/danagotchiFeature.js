describe('Danagotchi', function(){
  it("displays the page title and 'Hello World'", function(){
    browser.get('http://localhost:4567');
    element(by.id('username')).sendKeys("Ina");
    element(by.id('displayName')).submit();
    expect(browser.getTitle()).toEqual('DANAGOTCHI');
    expect(element(by.id('greeting')).getText()).toBe('Hello Ina!');
  });

  it("displays the page title and a quote", function(){
    browser.get('http://localhost:4567');
    expect(element(by.id('quote')).getText()).toBe('Danagotchi is awesome!');
  });
});
