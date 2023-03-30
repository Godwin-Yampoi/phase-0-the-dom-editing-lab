it("within the <p>, it contains an <a> tag", function () {
  var pTag = document.getElementsByTagName("p")[0];
  expect(pTag.innerHTML).to.include(
    'And here\'s a link to <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">Mozilla Developer Network</a>.'
  );
});
