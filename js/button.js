//メガシンカボタンの変更
function mega_button(){
	if((document.nForm.elements['pokename'].value=="ギルガルド")||
		(document.nForm.elements['pokename'].value=="ギルガルド(ブレード)")||
		(document.nForm.elements['pokename'].value=="ギルガルド(シールド)")){
		document.nForm.elements['mega0'].value="ブレード";
		document.nForm.elements['mega1'].value="シールド";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ヒヒダルマ")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ダルマ)")){
		document.nForm.elements['mega0'].value="ノーマル";
		document.nForm.elements['mega1'].value="ダルマ";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="シェイミ")||
		(document.nForm.elements['pokename'].value=="シェイミ(ランド)")||
		(document.nForm.elements['pokename'].value=="シェイミ(スカイ)")){
		document.nForm.elements['mega0'].value="ランド";
		document.nForm.elements['mega1'].value="スカイ";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="メロエッタ")||
		(document.nForm.elements['pokename'].value=="メロエッタ(ボイス)")||
		(document.nForm.elements['pokename'].value=="メロエッタ(ステップ)")){
		document.nForm.elements['mega0'].value="ボイス";
		document.nForm.elements['mega1'].value="ステップ";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ギラティナ")||
		(document.nForm.elements['pokename'].value=="ギラティナ(アナザー)")||
		(document.nForm.elements['pokename'].value=="ギラティナ(オリジン)")){
		document.nForm.elements['mega0'].value="アナザー";
		document.nForm.elements['mega1'].value="オリジン";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ボルトロス")||
		(document.nForm.elements['pokename'].value=="ボルトロス(化身)")||
		(document.nForm.elements['pokename'].value=="ボルトロス(霊獣)")||
		(document.nForm.elements['pokename'].value=="ランドロス")||
		(document.nForm.elements['pokename'].value=="ランドロス(化身)")||
		(document.nForm.elements['pokename'].value=="ランドロス(霊獣)")||
		(document.nForm.elements['pokename'].value=="トルネロス")||
		(document.nForm.elements['pokename'].value=="トルネロス(化身)")||
		(document.nForm.elements['pokename'].value=="トルネロス(霊獣)")){
		document.nForm.elements['mega0'].value="化身";
		document.nForm.elements['mega1'].value="霊獣";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="フーパ")||
		(document.nForm.elements['pokename'].value=="フーパ(いましめられし)")||
		(document.nForm.elements['pokename'].value=="フーパ(ときはなたれし)")){
		document.nForm.elements['mega0'].value="いましめられし";
		document.nForm.elements['mega1'].value="ときはなたれし";
		visi(5);
	}else if((document.nForm.elements['pokename'].value=="キュレム")||
		(document.nForm.elements['pokename'].value=="キュレム(通常)")||
		(document.nForm.elements['pokename'].value=="ブラックキュレム")||
		(document.nForm.elements['pokename'].value=="ホワイトキュレム")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="ブラック";
		document.nForm.elements['mega2'].value="ホワイト";
		visi(3);
	}else if((document.nForm.elements['pokename'].value=="ミノマダム")||
		(document.nForm.elements['pokename'].value=="ミノマダム(草木)")||
		(document.nForm.elements['pokename'].value=="ミノマダム(砂地)")||
		(document.nForm.elements['pokename'].value=="ミノマダム(ゴミ)")){
		document.nForm.elements['mega0'].value="草木";
		document.nForm.elements['mega1'].value="砂地";
		document.nForm.elements['mega2'].value="ゴミ";
		visi(3);
	}else if((document.nForm.elements['pokename'].value=="デオキシス")||
		(document.nForm.elements['pokename'].value=="デオキシス(ノーマル)")||
		(document.nForm.elements['pokename'].value=="デオキシス(アタック)")||
		(document.nForm.elements['pokename'].value=="デオキシス(ディフェンス)")||
		(document.nForm.elements['pokename'].value=="デオキシス(スピード)")){
		document.nForm.elements['mega0'].value="ノーマル";
		document.nForm.elements['mega1'].value="アタック";
		document.nForm.elements['mega2'].value="ディフェンス";
		document.nForm.elements['mega3'].value="スピード";
		visi(6);
	}else if((document.nForm.elements['pokename'].value=="バケッチャ")||
		(document.nForm.elements['pokename'].value=="バケッチャ(轍)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(大きい)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(普通)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(小さい)")){
		document.nForm.elements['mega0'].value="轍";
		document.nForm.elements['mega1'].value="大きい";
		document.nForm.elements['mega2'].value="普通";
		document.nForm.elements['mega3'].value="小さい";
		visi(4);
	}else if((document.nForm.elements['pokename'].value=="パンプジン")||
		(document.nForm.elements['pokename'].value=="パンプジン(轍)")||
		(document.nForm.elements['pokename'].value=="パンプジン(大きい)")||
		(document.nForm.elements['pokename'].value=="パンプジン(普通)")||
		(document.nForm.elements['pokename'].value=="パンプジン(小さい)")){
		document.nForm.elements['mega0'].value="轍";
		document.nForm.elements['mega1'].value="大きい";
		document.nForm.elements['mega2'].value="普通";
		document.nForm.elements['mega3'].value="小さい";
		visi(4);
	}else if((document.nForm.elements['pokename'].value=="ロトム")||
		(document.nForm.elements['pokename'].value=="ロトム(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ロトム(ヒート")||
		(document.nForm.elements['pokename'].value=="ロトム(カット)")||
		(document.nForm.elements['pokename'].value=="ロトム(スピン)")||
		(document.nForm.elements['pokename'].value=="ロトム(フロスト)")||
		(document.nForm.elements['pokename'].value=="ロトム(ウォッシュ)")||
		(document.nForm.elements['pokename'].value=="ロトム(FC)")){
		document.nForm.elements['mega0'].value="ノーマル";
		document.nForm.elements['mega1'].value="FC";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="リザードン")||
		(document.nForm.elements['pokename'].value=="メガリザードンX")||
		(document.nForm.elements['pokename'].value=="メガリザードンY")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="メガＸ";
		document.nForm.elements['mega2'].value="メガＹ";
		visi(3);
	}else if((document.nForm.elements['pokename'].value=="ミュウツー")||
		(document.nForm.elements['pokename'].value=="メガミュウツーX")||
		(document.nForm.elements['pokename'].value=="メガミュウツーY")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="メガＸ";
		document.nForm.elements['mega2'].value="メガＹ";
		visi(3);
	}else if(
	(document.nForm.elements['pokename'].value=="フシギバナ")||(document.nForm.elements['pokename'].value=="メガフシギバナ")||
	(document.nForm.elements['pokename'].value=="カメックス")||(document.nForm.elements['pokename'].value=="メガカメックス")||
	(document.nForm.elements['pokename'].value=="フーディン")||(document.nForm.elements['pokename'].value=="メガフーディン")||
	(document.nForm.elements['pokename'].value=="ゲンガー")||(document.nForm.elements['pokename'].value=="メガゲンガー")||
	(document.nForm.elements['pokename'].value=="ガルーラ")||(document.nForm.elements['pokename'].value=="メガガルーラ")||
	(document.nForm.elements['pokename'].value=="カイロス")||(document.nForm.elements['pokename'].value=="メガカイロス")||
	(document.nForm.elements['pokename'].value=="ギャラドス")||(document.nForm.elements['pokename'].value=="メガギャラドス")||
	(document.nForm.elements['pokename'].value=="プテラ")||(document.nForm.elements['pokename'].value=="メガプテラ")||
	(document.nForm.elements['pokename'].value=="デンリュウ")||(document.nForm.elements['pokename'].value=="メガデンリュウ")||
	(document.nForm.elements['pokename'].value=="ハッサム")||(document.nForm.elements['pokename'].value=="メガハッサム")||
	(document.nForm.elements['pokename'].value=="ヘラクロス")||(document.nForm.elements['pokename'].value=="メガヘラクロス")||
	(document.nForm.elements['pokename'].value=="ヘルガー")||(document.nForm.elements['pokename'].value=="メガヘルガー")||
	(document.nForm.elements['pokename'].value=="バンギラス")||(document.nForm.elements['pokename'].value=="バンギラス")||
	(document.nForm.elements['pokename'].value=="バシャーモ")||(document.nForm.elements['pokename'].value=="メガバシャーモ")||
	(document.nForm.elements['pokename'].value=="サーナイト")||(document.nForm.elements['pokename'].value=="メガサーナイト")||
	(document.nForm.elements['pokename'].value=="クチート")||(document.nForm.elements['pokename'].value=="メガクチート")||
	(document.nForm.elements['pokename'].value=="ボスゴドラ")||(document.nForm.elements['pokename'].value=="メガボスゴドラ")||
	(document.nForm.elements['pokename'].value=="チャーレム")||(document.nForm.elements['pokename'].value=="メガチャーレム")||
	(document.nForm.elements['pokename'].value=="ジュペッタ")||(document.nForm.elements['pokename'].value=="メガジュペッタ")||
	(document.nForm.elements['pokename'].value=="アブソル")||(document.nForm.elements['pokename'].value=="メガアブソル")||
	(document.nForm.elements['pokename'].value=="ガブリアス")||(document.nForm.elements['pokename'].value=="メガガブリアス")||
	(document.nForm.elements['pokename'].value=="ルカリオ")||(document.nForm.elements['pokename'].value=="メガルカリオ")||
	(document.nForm.elements['pokename'].value=="ユキノオー")||(document.nForm.elements['pokename'].value=="メガユキノオー")||
	(document.nForm.elements['pokename'].value=="スピアー")||(document.nForm.elements['pokename'].value=="メガスピアー")||
	(document.nForm.elements['pokename'].value=="ピジョット")||(document.nForm.elements['pokename'].value=="メガピジョット")||
	(document.nForm.elements['pokename'].value=="ヤドラン")||(document.nForm.elements['pokename'].value=="メガヤドラン")||
	(document.nForm.elements['pokename'].value=="ハガネール")||(document.nForm.elements['pokename'].value=="メガハガネール")||
	(document.nForm.elements['pokename'].value=="ジュカイン")||(document.nForm.elements['pokename'].value=="メガジュカイン")||
	(document.nForm.elements['pokename'].value=="ラグラージ")||(document.nForm.elements['pokename'].value=="メガラグラージ")||
	(document.nForm.elements['pokename'].value=="ヤミラミ")||(document.nForm.elements['pokename'].value=="メガヤミラミ")||
	(document.nForm.elements['pokename'].value=="サメハダー")||(document.nForm.elements['pokename'].value=="メガサメハダー")||
	(document.nForm.elements['pokename'].value=="バクーダ")||(document.nForm.elements['pokename'].value=="メガバクーダ")||
	(document.nForm.elements['pokename'].value=="チルタリス")||(document.nForm.elements['pokename'].value=="メガチルタリス")||
	(document.nForm.elements['pokename'].value=="オニゴーリ")||(document.nForm.elements['pokename'].value=="メガオニゴーリ")||
	(document.nForm.elements['pokename'].value=="ボーマンダ")||(document.nForm.elements['pokename'].value=="メガボーマンダ")||
	(document.nForm.elements['pokename'].value=="メタグロス")||(document.nForm.elements['pokename'].value=="メガメタグロス")||
	(document.nForm.elements['pokename'].value=="ラティアス")||(document.nForm.elements['pokename'].value=="メガラティアス")||
	(document.nForm.elements['pokename'].value=="ラティオス")||(document.nForm.elements['pokename'].value=="メガラティオス")||
	(document.nForm.elements['pokename'].value=="レックウザ")||(document.nForm.elements['pokename'].value=="メガレックウザ")||
	(document.nForm.elements['pokename'].value=="ミミロップ")||(document.nForm.elements['pokename'].value=="メガミミロップ")||
	(document.nForm.elements['pokename'].value=="エルレイド")||(document.nForm.elements['pokename'].value=="メガエルレイド")||
	(document.nForm.elements['pokename'].value=="タブンネ")||(document.nForm.elements['pokename'].value=="メガタブンネ")||
	(document.nForm.elements['pokename'].value=="ディアンシー")||(document.nForm.elements['pokename'].value=="ディアンシー")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="メガ";
		visi(2);
	}else{
		visi(0);
	}
}
function visi(num){
	if(num == 0){
		document.nForm.elements['mega0'].style.visibility="hidden";
		document.nForm.elements['mega1'].style.visibility="hidden";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
	}else if(num == 2){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
		document.nForm.elements['mega2'].style.width = 70;
	}else if(num == 3){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
		document.nForm.elements['mega2'].style.width = 70;
	}else if(num == 4){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="visible";
		document.nForm.elements['mega0'].style.width = 60;
		document.nForm.elements['mega1'].style.width = 60;
		document.nForm.elements['mega2'].style.width = 60;
		document.nForm.elements['mega3'].style.width = 60;
	}else if(num == 5){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 100;
		document.nForm.elements['mega1'].style.width = 100;
	}else if(num == 6){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="visible";
		document.nForm.elements['mega0'].style.width = 60;
		document.nForm.elements['mega1'].style.width = 60;
		document.nForm.elements['mega2'].style.width = 80;
		document.nForm.elements['mega3'].style.width = 60;
	}
}



//メガシンカボタン
function megachange(num){
	if((document.nForm.elements['pokename'].value=="ギルガルド")||
		(document.nForm.elements['pokename'].value=="ギルガルド(ブレード)")||
		(document.nForm.elements['pokename'].value=="ギルガルド(シールド)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギルガルド(ブレード)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギルガルド(シールド)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ヒヒダルマ")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ダルマ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ノーマル)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ダルマ)";
 		}
	}else if((document.nForm.elements['pokename'].value=="シェイミ")||
		(document.nForm.elements['pokename'].value=="シェイミ(ランド)")||
		(document.nForm.elements['pokename'].value=="シェイミ(スカイ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="シェイミ(ランド)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="シェイミ(スカイ)";
 		}
	}else if((document.nForm.elements['pokename'].value=="メロエッタ")||
		(document.nForm.elements['pokename'].value=="メロエッタ(ボイス)")||
		(document.nForm.elements['pokename'].value=="メロエッタ(ステップ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="メロエッタ(ボイス)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メロエッタ(ステップ)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ギラティナ")||
		(document.nForm.elements['pokename'].value=="ギラティナ(アナザー)")||
		(document.nForm.elements['pokename'].value=="ギラティナ(オリジン)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギラティナ(アナザー)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギラティナ(オリジン)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ボルトロス")||
		(document.nForm.elements['pokename'].value=="ボルトロス(化身)")||
		(document.nForm.elements['pokename'].value=="ボルトロス(霊獣)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ボルトロス(化身)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ボルトロス(霊獣)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ランドロス")||
		(document.nForm.elements['pokename'].value=="ランドロス(化身)")||
		(document.nForm.elements['pokename'].value=="ランドロス(霊獣)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ランドロス(化身)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ランドロス(霊獣)";
 		}
	}else if((document.nForm.elements['pokename'].value=="トルネロス")||
		(document.nForm.elements['pokename'].value=="トルネロス(化身)")||
		(document.nForm.elements['pokename'].value=="トルネロス(霊獣)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="トルネロス(化身)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="トルネロス(霊獣)";
 		}
	}else if((document.nForm.elements['pokename'].value=="フーパ")||
		(document.nForm.elements['pokename'].value=="フーパ(いましめられし)")||
		(document.nForm.elements['pokename'].value=="フーパ(ときはなたれし)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="フーパ(いましめられし)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="フーパ(ときはなたれし)";
 		}
	}else if((document.nForm.elements['pokename'].value=="キュレム")||
		(document.nForm.elements['pokename'].value=="キュレム(通常)")||
		(document.nForm.elements['pokename'].value=="ブラックキュレム")||
		(document.nForm.elements['pokename'].value=="ホワイトキュレム")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="キュレム(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ブラックキュレム";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ホワイトキュレム";
 		}
 	}else if((document.nForm.elements['pokename'].value=="ミノマダム")||
 		(document.nForm.elements['pokename'].value=="ミノマダム(草木)")||
		(document.nForm.elements['pokename'].value=="ミノマダム(砂地)")||
		(document.nForm.elements['pokename'].value=="ミノマダム(ゴミ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ミノマダム(草木)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ミノマダム(砂地)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ミノマダム(ゴミ)";
 		}
	}else if((document.nForm.elements['pokename'].value=="デオキシス")||
		(document.nForm.elements['pokename'].value=="デオキシス(ノーマル)")||
		(document.nForm.elements['pokename'].value=="デオキシス(アタック)")||
		(document.nForm.elements['pokename'].value=="デオキシス(ディフェンス)")||
		(document.nForm.elements['pokename'].value=="デオキシス(スピード)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="デオキシス(ノーマル)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="デオキシス(アタック)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="デオキシス(ディフェンス)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="デオキシス(スピード)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="バケッチャ")||
		(document.nForm.elements['pokename'].value=="バケッチャ(轍)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(大きい)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(普通)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="バケッチャ(轍)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="バケッチャ(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="バケッチャ(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="バケッチャ(小さい)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="パンプジン")||
		(document.nForm.elements['pokename'].value=="パンプジン(轍)")||
		(document.nForm.elements['pokename'].value=="パンプジン(大きい)")||
		(document.nForm.elements['pokename'].value=="パンプジン(普通)")||
		(document.nForm.elements['pokename'].value=="パンプジン(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="パンプジン(轍)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="パンプジン(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="パンプジン(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="パンプジン(小さい)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ロトム")||
		(document.nForm.elements['pokename'].value=="ロトム(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ロトム(ヒート")||
		(document.nForm.elements['pokename'].value=="ロトム(カット)")||
		(document.nForm.elements['pokename'].value=="ロトム(スピン)")||
		(document.nForm.elements['pokename'].value=="ロトム(フロスト)")||
		(document.nForm.elements['pokename'].value=="ロトム(ウォッシュ)")||
		(document.nForm.elements['pokename'].value=="ロトム(FC)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ロトム(ノーマル)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ロトム(FC)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="リザードン")||
		(document.nForm.elements['pokename'].value=="メガリザードンX")||
		(document.nForm.elements['pokename'].value=="メガリザードンY")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="リザードン";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メガリザードンX";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="メガリザードンY";
 		}
	}else if((document.nForm.elements['pokename'].value=="ミュウツー")||
		(document.nForm.elements['pokename'].value=="メガミュウツーX")||
		(document.nForm.elements['pokename'].value=="メガミュウツーY")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ミュウツー";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メガミュウツーX";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="メガミュウツーY";
 		}
	}else if(
	(document.nForm.elements['pokename'].value=="フシギバナ")||(document.nForm.elements['pokename'].value=="メガフシギバナ")||
	(document.nForm.elements['pokename'].value=="リザードン")||(document.nForm.elements['pokename'].value=="メガリザードンＸ")||(document.nForm.elements['pokename'].value=="メガリザードンＹ")||
	(document.nForm.elements['pokename'].value=="カメックス")||(document.nForm.elements['pokename'].value=="メガカメックス")||
	(document.nForm.elements['pokename'].value=="フーディン")||(document.nForm.elements['pokename'].value=="メガフーディン")||
	(document.nForm.elements['pokename'].value=="ゲンガー")||(document.nForm.elements['pokename'].value=="メガゲンガー")||
	(document.nForm.elements['pokename'].value=="ガルーラ")||(document.nForm.elements['pokename'].value=="メガガルーラ")||
	(document.nForm.elements['pokename'].value=="カイロス")||(document.nForm.elements['pokename'].value=="メガカイロス")||
	(document.nForm.elements['pokename'].value=="ギャラドス")||(document.nForm.elements['pokename'].value=="メガギャラドス")||
	(document.nForm.elements['pokename'].value=="プテラ")||(document.nForm.elements['pokename'].value=="メガプテラ")||
	(document.nForm.elements['pokename'].value=="ミュウツー")||(document.nForm.elements['pokename'].value=="メガミュウツーＸ")||(document.nForm.elements['pokename'].value=="メガミュウツーＹ")||
	(document.nForm.elements['pokename'].value=="デンリュウ")||(document.nForm.elements['pokename'].value=="メガデンリュウ")||
	(document.nForm.elements['pokename'].value=="ハッサム")||(document.nForm.elements['pokename'].value=="メガハッサム")||
	(document.nForm.elements['pokename'].value=="ヘラクロス")||(document.nForm.elements['pokename'].value=="メガヘラクロス")||
	(document.nForm.elements['pokename'].value=="ヘルガー")||(document.nForm.elements['pokename'].value=="メガヘルガー")||
	(document.nForm.elements['pokename'].value=="バンギラス")||(document.nForm.elements['pokename'].value=="バンギラス")||
	(document.nForm.elements['pokename'].value=="バシャーモ")||(document.nForm.elements['pokename'].value=="メガバシャーモ")||
	(document.nForm.elements['pokename'].value=="サーナイト")||(document.nForm.elements['pokename'].value=="メガサーナイト")||
	(document.nForm.elements['pokename'].value=="クチート")||(document.nForm.elements['pokename'].value=="メガクチート")||
	(document.nForm.elements['pokename'].value=="ボスゴドラ")||(document.nForm.elements['pokename'].value=="メガボスゴドラ")||
	(document.nForm.elements['pokename'].value=="チャーレム")||(document.nForm.elements['pokename'].value=="メガチャーレム")||
	(document.nForm.elements['pokename'].value=="ジュペッタ")||(document.nForm.elements['pokename'].value=="メガジュペッタ")||
	(document.nForm.elements['pokename'].value=="アブソル")||(document.nForm.elements['pokename'].value=="メガアブソル")||
	(document.nForm.elements['pokename'].value=="ガブリアス")||(document.nForm.elements['pokename'].value=="メガガブリアス")||
	(document.nForm.elements['pokename'].value=="ルカリオ")||(document.nForm.elements['pokename'].value=="メガルカリオ")||
	(document.nForm.elements['pokename'].value=="ユキノオー")||(document.nForm.elements['pokename'].value=="メガユキノオー")||
	(document.nForm.elements['pokename'].value=="スピアー")||(document.nForm.elements['pokename'].value=="メガスピアー")||
	(document.nForm.elements['pokename'].value=="ピジョット")||(document.nForm.elements['pokename'].value=="メガピジョット")||
	(document.nForm.elements['pokename'].value=="ヤドラン")||(document.nForm.elements['pokename'].value=="メガヤドラン")||
	(document.nForm.elements['pokename'].value=="ハガネール")||(document.nForm.elements['pokename'].value=="メガハガネール")||
	(document.nForm.elements['pokename'].value=="ジュカイン")||(document.nForm.elements['pokename'].value=="メガジュカイン")||
	(document.nForm.elements['pokename'].value=="ラグラージ")||(document.nForm.elements['pokename'].value=="メガラグラージ")||
	(document.nForm.elements['pokename'].value=="ヤミラミ")||(document.nForm.elements['pokename'].value=="メガヤミラミ")||
	(document.nForm.elements['pokename'].value=="サメハダー")||(document.nForm.elements['pokename'].value=="メガサメハダー")||
	(document.nForm.elements['pokename'].value=="バクーダ")||(document.nForm.elements['pokename'].value=="メガバクーダ")||
	(document.nForm.elements['pokename'].value=="チルタリス")||(document.nForm.elements['pokename'].value=="メガチルタリス")||
	(document.nForm.elements['pokename'].value=="オニゴーリ")||(document.nForm.elements['pokename'].value=="メガオニゴーリ")||
	(document.nForm.elements['pokename'].value=="ボーマンダ")||(document.nForm.elements['pokename'].value=="メガボーマンダ")||
	(document.nForm.elements['pokename'].value=="メタグロス")||(document.nForm.elements['pokename'].value=="メガメタグロス")||
	(document.nForm.elements['pokename'].value=="ラティアス")||(document.nForm.elements['pokename'].value=="メガラティアス")||
	(document.nForm.elements['pokename'].value=="ラティオス")||(document.nForm.elements['pokename'].value=="メガラティオス")||
	(document.nForm.elements['pokename'].value=="レックウザ")||(document.nForm.elements['pokename'].value=="メガレックウザ")||
	(document.nForm.elements['pokename'].value=="ミミロップ")||(document.nForm.elements['pokename'].value=="メガミミロップ")||
	(document.nForm.elements['pokename'].value=="エルレイド")||(document.nForm.elements['pokename'].value=="メガエルレイド")||
	(document.nForm.elements['pokename'].value=="タブンネ")||(document.nForm.elements['pokename'].value=="メガタブンネ")||
	(document.nForm.elements['pokename'].value=="ディアンシー")||(document.nForm.elements['pokename'].value=="ディアンシー")){
		if(parseInt(num)==0){
			var index = document.nForm.elements['pokename'].value.indexOf("メガ");
			if(index != -1){
 				document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/メガ/g,"");
 			}
 		}else if(parseInt(num)==1){
 			var index = document.nForm.elements['pokename'].value.indexOf("メガ");
 			if(index == -1){
 				document.nForm.elements['pokename'].value="メガ"+ document.nForm.elements['pokename'].value;
 			}
 		}
	}
	setpokemon();
}