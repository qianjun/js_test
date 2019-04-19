// TODO: add memo item
function $(id) {
  return document.getElementById(id);
}

$('memo-textbox').addEventListener('keydown', (evt) => {
	if(evt.keyCode == 13){
		var input = $('memo-textbox').value;
		var memoItems = JSON.parse(localStorage.getItem('memoItems') || '[]');

		memoItems.push(input);
		localStorage.setItem('memoItems', JSON.stringify(memoItems));
		console.log(localStorage.getItem('memoItems'));//输出
		loadMemoItemslist();
		$('memo-textbox').focus();
	}
});