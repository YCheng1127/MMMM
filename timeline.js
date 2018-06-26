$(document).ready(function(){
	story_click();
	story_end_click();
});

function story_click(){
	var story_page = document.getElementById('story');
	story_page.addEventListener('touchend',function(event){
		event.preventDefault();
		var story_target = event.target.id;
		var story_target_slice = story_target.slice(-2);
		console.log(story_target, story_target_slice);
		
		if(story_target_slice=="_1"){
			story_target = document.getElementById(story_target);
			story_target_slice = story_target.id.slice(12,16);
			document.getElementById('story_content_text').style.fontSize = '3vh';
			document.getElementById('story_content_pic').style.top = '60vh';
			if(story_target_slice=="1725"){
				document.getElementById('story_content_text').innerHTML = '<b>府城地區原本毫無設防，直到1725年3月，開始為府城地區建設木柵欄圍城牆，並建立七座木城門，四座大城門(東、西、南、北)、三座小城門(東、南、北)</b>';
				document.getElementById('story_content_pic').style.display = 'none';
			}
			else if(story_target_slice=="1736"){
				document.getElementById('story_content_pic').src = './png/story_pic_1736.png';
				document.getElementById('story_content_text').innerHTML = '<b></b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1759"){
				document.getElementById('story_content_pic').src = './png/story_pic_1759.png';
				document.getElementById('story_content_text').innerHTML = '<b>除了原有的木柵之外，再於木柵外圍種植莿竹、綠珊瑚形成重重防護網。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1775"){
				document.getElementById('story_content_pic').src = './png/story_pic_1775.png';
				document.getElementById('story_content_text').innerHTML = '<b>台灣知府蔣元樞在乾隆四十年，在大南門外附近空地建立南壇義塚，為大南門外的無人埋葬的白骨作為殯葬之用。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1788"){
				document.getElementById('story_content_pic').src = './png/story_pic_1788.png';
				document.getElementById('story_content_text').innerHTML = '<b>由於清廷對台政策的不當，使得地方官壓榨百姓，終於1786年（乾隆51年），台灣最大的地下組織「天地會」的北路領袖林爽文率民自彰化大里杙（今台中市大里區）起義。不久後，鳳山縣天地會領袖莊大田也率眾於南路響應。短短一個多月，除台灣府（今台南市）、諸羅縣（今嘉義市）、鹿港鎮外，均已攻陷。<br>直至一年三個月後（1788年），事件終於平息。<br>在此事件發生後，乾隆皇帝有感於城堅固之重要性，固准許臺灣從刺竹、木柵之構材改為三合土城；同時，為表彰平定此事件，特賜贔屭御碑（全名為清乾隆漢滿文御碑）予臺灣府。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_text').style.fontSize = '2vh';
				document.getElementById('story_content_pic').style.top = '67vh';
			}
			else if(story_target_slice=="1835"){
				document.getElementById('story_content_text').innerHTML = '<b>1832年，因臺灣夏季旱災造成稻作歉收，各鄉皆實施禁糴政策（禁止糧食流通）。有一商人陳壬癸在嘉義縣店仔口（今台南市白河區）私購數百石米，卻因政策的施行而無法運出，陳商便請託當地生員吳贊給予特權庇護運出莊外，途中卻被吳贊族人所劫。此時，吳贊卻指控為地方勢力張丙所為，嘉義知縣因此通緝張丙。同時，其友人陳辦也因與人發生械鬥而遭通緝。<br>張丙認為官府不公，而與陳辦二人一同起事、對抗官兵。期間，張丙聚集眾人數萬反抗官府，得到臺灣全區多地的響應，也曾佔領南部大部分縣市與雲林斗六門（今斗六）一帶。最後，因嘉義縣城久攻不下而漸平定。<br>事件後，臺灣府城建築外城，大南門也於此時增建了月城。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_pic').style.display = 'none';
				document.getElementById('story_content_text').style.fontSize = '2.5	vh';
			}
			else if(story_target_slice=="1848"){
				document.getElementById('story_content_pic').src = './png/story_pic_1848.png';
				document.getElementById('story_content_text').innerHTML = '<b>1848年（道光28年），清廷頒佈「示禁令」，於府城各大城門皆能看見示禁碑，用以禁止守城兵役勒索過路百姓。<br>碑上全文如下：「欽命鎮守臺澎掛印總鎮府葉示分巡 提學按司道徐農商負販，車牛往來，不許兵役勒索，特示。道光貳拾捌年陸月 日勒 」</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_text').style.fontSize = '2.5vh';
			}
			else if(story_target_slice=="1907"){
				document.getElementById('story_content_pic').src = './png/story_pic_1907.png';
				document.getElementById('story_content_text').innerHTML = '<b></b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1911"){
				console.log(story_target.id.slice(16,18));
				if(story_target.id.slice(16,18)=="_1"){
					document.getElementById('story_content_pic').src = './png/story_pic_1911_1.png';
					document.getElementById('story_content_text').innerHTML = '<b></b>';				
					document.getElementById('story_content_pic').style.display = 'block';
				}
				else if(story_target.id.slice(16,18)=="-2"){
					document.getElementById('story_content_pic').src = './png/story_pic_1911_2.png';
					document.getElementById('story_content_text').innerHTML = '<b>在日本統治後，1911年（明治44年）為編撰臺南市史，固開始搜集散於市內各地的古碑，寫成「調查報告書」。此舉為後來的碑林建造鋪下了前路。</b>';				
					document.getElementById('story_content_pic').style.display = 'block';
				}
			}
			else if(story_target_slice=="1927"){
				document.getElementById('story_content_pic').src = './png/story_pic_1927.png';
				document.getElementById('story_content_text').innerHTML = '<b>在日治時期的市區改正計畫下，至1917年，多數傾毀的城門、城牆皆已遭拆除。<br>1927年，完整被保留下來的大南門與月城終於重修。修建後的隔年，原位於福康安生祠內（後因市改計畫，祠因道路拓寬而拆毀，碑則被置於道路一側）的贔屭碑被移入月城內。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_text').style.fontSize = '2.5vh';
			}
			else if(story_target_slice=="1928"){
				document.getElementById('story_content_pic').src = './png/story_pic_1928.png';
				document.getElementById('story_content_text').innerHTML = '<b>1928年，台南州廳以「紀念昭和御大典」名義，徵收大南門外公用墓地19甲，藉此興建綜合大體育場。<br>州令公告：「紀念昭和御大典，預收台南市南門外公用墓地十九甲以建設合大運動場，凡有祖墳於該界內者，限期他遷；逾期不遷者，即認為無人管理之廢墓則行雇工挖掘。特此公告週知」。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_text').style.fontSize = '2.5vh';
				document.getElementById('story_content_pic').style.top = '63vh';
			}
			else if(story_target_slice=="1930"){
				document.getElementById('story_content_pic').src = './png/story_pic_1930.png';
				document.getElementById('story_content_text').innerHTML = '<b></b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1932"){
				document.getElementById('story_content_pic').src = './png/story_pic_1932.png';
				document.getElementById('story_content_text').innerHTML = '<b>1932落成的臺南放送局，建於大南門附近，新舊建設交織下，顯現出日本統治下的現代化歷程，是日治時期最南端的放送機構，為當時臺南與高雄的居民提供廣播服務。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1935"){
				document.getElementById('story_content_pic').src = './png/story_pic_1935.png';
				document.getElementById('story_content_text').innerHTML = '<b>1935年舉行的臺灣博覽會，為日本政府展現殖民統治下臺灣的現代化成果。不僅在臺北市設立會場，在全臺各地也有地方會館以展示各地特色，臺南的第三會場即於大南門空地展示各類型古碑</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_pic').style.top = '63vh';
			}
			else if(story_target_slice=="1963"){
				document.getElementById('story_content_pic').src = './png/story_pic_1963.png';
				document.getElementById('story_content_text').innerHTML = '<b>自日治時期到光復後，大南門歷經戰爭與風雨，早已殘破不堪，在1963多次颱風侵擾後，毀損嚴重，直至1977年才由政府重建大南門城樓與修復碑林。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
			}
			else if(story_target_slice=="1965"){
				document.getElementById('story_content_pic').src = './png/story_pic_1965.png';
				document.getElementById('story_content_text').innerHTML = '<b>清乾隆年間為表彰福康安平定林爽文之亂所賜御製碑贔，以底座似龜的祥獸贔屭為特色。原置放在建業街的功臣祠裡頭，日治時期移至大南門護城內，光復後又將龜碑移至赤崁樓南側，即為現貌。</b>';				
				document.getElementById('story_content_pic').style.display = 'block';
				document.getElementById('story_content_pic').style.top = '63vh';
			}
			else if(story_target_slice=="1977"){
				document.getElementById('story_content_text').innerHTML = '<b></b>';				
				document.getElementById('story_content_pic').style.display = 'none';
			}
			$('#story_content').fadeIn("slow");
			$('#story').css('overflowY','hidden');
			console.log(story_target.id);
		}
		else
			console.log('a');		
	},false);
}

function story_end_click(){
	var story_ed = document.getElementById('story_end');
	story_ed.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#story').css('overflowY','scroll');
		$('#story_content').fadeOut("slow");
	},false);
}