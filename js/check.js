//チェックを外す
function unchk1(num){
	for(i=1; i<6; i++) {
		if(i != parseInt(num)){
			if(document.nForm.elements[chup[i]].checked == true){
    			document.nForm.elements[chup[i]].checked = false;
    			if((document.nForm.elements[dn[i]].value)==0){
  					ncalc(i);
  				}else{
  					dcalc(i);
  				}
    		}
    	}
  	}
  	document.nForm.elements[chdw[num]].checked = false;
  	dcalc(num);
}
function unchk2(num){
	for(i=1; i<6; i++) {
		if(i != parseInt(num)){
			if(document.nForm.elements[chdw[i]].checked == true){
    			document.nForm.elements[chdw[i]].checked = false;
    			dcalc(i);
    		}
    	}
  	}
  	document.nForm.elements[chup[num]].checked = false;
  	if((document.nForm.elements[dn[num]].value)==0){
  		ncalc(num);
  	}else{
  		dcalc(num);
  	}
}
//ボタンで数値代入
function setvalue(elm,num){
	//document.nForm.elements[elm].value = parseInt(num);
	if(num =="-1"){
		document.nForm.elements[elm].value ="";
	}else{
		document.nForm.elements[elm].value = parseInt(num);
	}
}

//▼ボタンで能力値の増減
function nchange(num1, num2){
	n = parseInt(document.nForm.elements[nn[num1]].value);
	if(parseInt(num2)==0){
		n +=1;
	}else if(parseInt(num2)==1){
		n -=1;
	}
	if(n > 999){
		n = 999;
	}else if(n < 0){
		n = 0;
	}
	document.nForm.elements[nn[num1]].value = n;
}
//▼ボタンで値の努力値の増減
function dchange(num1, num2){
	n = parseInt(document.nForm.elements[dn[num1]].value);
	if(parseInt(num2)==0){
		n += 4;
	}else if(parseInt(num2)==1){
		n -= 4;
	}
	if(n > 252){
		n = 252;
	}else if(n < 0){
		n = 0;
	}
	document.nForm.elements[dn[num1]].value = n;
}
//能力値を計算する
function ncalc(num){
	n = parseInt(document.nForm.elements[dn[num]].value);
	if(n > 252){
		document.nForm.elements[dn[num]].style.color = "red";
	}else{
		document.nForm.elements[dn[num]].style.color = "black";
	}
	n = Math.floor(n / 4);
	n += parseInt(document.nForm.elements[sn[num]].value) * 2 + parseInt(document.nForm.elements[kn[num]].value);
	n = Math.floor(n * parseInt(document.nForm.elements['L0'].value) / 100);
	if(num == 0){//H能力値の計算
		n += 10 + parseInt(document.nForm.elements['L0'].value);
	}else{//ABCDS能力値の計算
		n += 5;
		if(document.nForm.elements[chup[parseInt(num)]].checked == true){
			n = Math.floor(n*1.1);
		}else if(document.nForm.elements[chdw[parseInt(num)]].checked == true){
			n = Math.floor(n*0.9);
		}
	}
	document.nForm.elements[nn[num]].value=n;
	moji();
}
//努力値を逆算する
function dcalc(num){
	n = document.nForm.elements[nn[num]].value;
	
	if((n%11==10) && (num!=0)){
		if(document.nForm.elements[chup[num]].checked == true){
			if(parseInt(n) >= parseInt(nnn)){
				n = parseInt(n)+1;
			}else{
				n = parseInt(n)-1;
			}
			document.nForm.elements[nn[num]].value = n;
		}
	}
	nnn = n;
	
	if(num==0){
		n = n - document.nForm.elements['L0'].value - 10;
	}else{
		if(document.nForm.elements[chup[parseInt(num)]].checked == true){
			n = Math.ceil(n/1.1);
		}else if(document.nForm.elements[chdw[parseInt(num)]].checked == true){
			n = Math.ceil(n/0.9);
		}
		n -= 5;
	}
	n = Math.ceil(n * 100 / document.nForm.elements['L0'].value);
	n = (n - parseInt(document.nForm.elements[sn[num]].value) *2 - parseInt(document.nForm.elements[kn[num]].value))*4;
	if(n < 0){
		document.nForm.elements[dn[num]].value = 0;
		ncalc(num);
	}else{
		document.nForm.elements[dn[num]].value = n;
	}
	if(n > 252){
		document.nForm.elements[dn[num]].style.color = "red";
	}else{
		document.nForm.elements[dn[num]].style.color = "black";
	}
	dsum();moji();
}
//残り努力値の合計を計算する
function dsum(){
	n = 510;
	for(i=0; i<6; i++){
		n -= parseInt(document.nForm.elements[dn[i]].value);
	}
	
	document.nForm.elements['d6'].value = n;
	if(n < 0){
		document.nForm.elements['d6'].style.color = "red";
	}else{
		document.nForm.elements['d6'].style.color = "black";
	}
	
}
//ステータスをテキストボックス外に表示する
function moji(){
	var text = document.nForm.elements['target'];
	
	text.value =document.nForm.elements['pokename'].value;
	for(i=1; i<6; i++){
		if(document.nForm.elements[chup[i]].checked == true){
			break;
		}
	}
	for(j=1; j<6; j++){
		if(document.nForm.elements[chdw[j]].checked == true){
			break;
		}
	}
	switch(i){
		case 1:
			if(j == 2){
				text.value +=" さみしがり ";
			}else if(j == 3){
				text.value +=" いじっぱり ";
			}else if(j == 4){
				text.value +=" やんちゃ ";
			}else if(j == 5){
				text.value +=" ゆうかん ";
			}else{
				text.value +=" ??? ";
			}
			break
		case 2:
			if(j == 1){
				text.value +=" ずぶとい ";
			}else if(j == 3){
				text.value +=" わんぱく ";
			}else if(j == 4){
				text.value +=" のうてんき ";
			}else if(j == 5){
				text.value +=" のんき ";
			}else{
				text.value +=" ??? ";
			}
			break
		case 3:
			if(j == 1){
				text.value +=" ひかえめ ";
			}else if(j == 2){
				text.value +=" おっとり ";
			}else if(j == 4){
				text.value +=" うっかりや ";
			}else if(j == 5){
				text.value +=" れいせい ";
			}else{
				text.value +=" ??? ";
			}
			break;
		case 4:
			if(j == 1){
				text.value +=" おだやか ";
			}else if(j == 2){
				text.value +=" おとなしい ";
			}else if(j == 3){
				text.value +=" しんちょう ";
			}else if(j == 5){
				text.value +=" なまいき ";
			}else{
				text.value +=" ??? ";
			}
			break;
		case 5:
			if(j == 1){
				text.value +=" おくびょう ";
			}else if(j == 2){
				text.value +=" せっかち ";
			}else if(j == 3){
				text.value +=" ようき ";
			}else if(j == 4){
				text.value +=" むじゃき ";
			}else{
				text.value +=" ??? ";
			}
			break;
		case 6:
			if(j == 6){
				text.value +=" まじめ ";
			}else{
				text.value +=" ??? ";
			}
			break;
	}
	for(i=0; i<6; i++){
		if(document.nForm.elements[nn[i]].value >= 1){
			text.value += document.nForm.elements[nn[i]].value;
			if(document.nForm.elements[dn[i]].value > 0){
				text.value +="(";
				text.value +=document.nForm.elements[dn[i]].value;
				text.value +=")";
			}
		}else{
			text.value += "×";
		}
		if(i <5){
			text.value += "-";
		}
	}
}
//種族値を代入する
function setpokemon(){
	mega_button();
	for(i=0; i<pokemon.length; i++){
		if(pokemon[i][0]==document.nForm.elements['pokename'].value){
			document.nForm.elements[sn[0]].value = pokemon[i][1];
			document.nForm.elements[sn[1]].value = pokemon[i][2];
			document.nForm.elements[sn[2]].value = pokemon[i][3];
			document.nForm.elements[sn[3]].value = pokemon[i][4];
			document.nForm.elements[sn[4]].value = pokemon[i][5];
			document.nForm.elements[sn[5]].value = pokemon[i][6];
			document.nForm.elements[sn[6]].value = pokemon[i][7];
			break;
		}
	}
	ncalc(0);ncalc(1);ncalc(2);ncalc(3);ncalc(4);ncalc(5);moji();
}
//努力値をすべて0にする
function dreset(){
	for(i=0; i<6; i++){
		document.nForm.elements[dn[i]].value = 0;
		document.nForm.elements[dn[i]].style.color = "black";
	}
	dsum();moji();
}
//種族値合計を計算する
function ssum(){
	n=0;
	for(i=0; i<6; i++){
		n += parseInt(document.nForm.elements[sn[i]].value);
	}
	document.nForm.elements[sn[6]].value = n;
}

//ポケモン名を検索する
//部分一致で表示できた　次は変換バグを直したい　入力中の文字がひらがなが1字になるごとにまとめて追加入力される　文字が増える
//カタカナに変換してからでないと認識してくれない


function pokeserach(){
	var elm = hiraganaToKatagana(document.getElementById('pokename').value);
	var elm2 = elm;
	var j = 0;
	var e = document.getElementById('combolist');
	var e2 = '';
	if(elm.length >= 1){
		for(i=0; i<pokemon.length; i++){
			var elm3 = pokemon[i][0];
			var index = elm3.indexOf(elm2);
			if(index != -1){
				e2 += '<option value = "'+ pokemon[i][0] +'"></option>';
				j++;
 			}
 			if(j >= 20){
 				break;
 			}
		}
		document.getElementById('pokename').value = elm;//挿入するけど2重になっていく
		
		while (e.firstChild){
			e.removeChild(e.firstChild);
		}
		e.innerHTML += e2;
	}
	
}

//ひらがな→カタカナ変換
function hiraganaToKatagana(src) {
	return src.replace(/[\u3041-\u3096]/g, function(match) {
		var chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
}

