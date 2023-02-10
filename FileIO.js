function FileIO(file, result) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', file, true);
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				result.textContent = '';
				let lines = xhr.responseText.split('\n');
				let line = '';
				for (i = 0; i < lines.length; i++) {
					line += lines[i] + '<br />';
				}
				result.insertAdjacentHTML('afterbegin', line);
			} else {
				result.textContent = 'Error';
			}
		} else {
			result.textContent = '読み込み中';
		}
	}
}

//let result = document.getElementById('result');
//FileIO('CharacterData.dat', result);