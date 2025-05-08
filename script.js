const csvData = `高校名,地方,都道府県,東京大学,京都大学,北海道大学,東北大学,東京科学大学,一橋大学,名古屋大学,大阪大学,九州大学,筑波大学,千葉大学,横浜国立大学,早稲田大学,慶応義塾大学,金沢大学,神戸大学,広島大学,岡山大学,富山大学,大阪公立大学,鳥取大学
旭川東高校,北海道,北海道,2,4,43,5,1,2,,4,1,2,5,3,4,3,,,,,,,
札幌西高校,北海道,北海道,2,3,74,8,5,2,1,5,1,3,11,4,14,1,,,,,,,
札幌北高校,北海道,北海道,3,13,97,15,,3,,12,4,1,,2,2,2,,,,,,,
室蘭栄高校,北海道,北海道,3,1,21,3,2,1,,3,,2,,1,3,1,,,,,,,
札幌南高校,北海道,北海道,18,18,70,7,6,1,3,19,4,4,5,4,15,9,,,,,,,
青森高校,東北,青森,3,1,3,26,2,,,,,7,1,,3,2,,,,,,,
弘前高校,東北,青森,2,2,6,25,3,,1,3,,2,8,4,3,2,,,,,,,
八戸高校,東北,青森,4,1,3,33,,,,1,,,6,1,6,1,,,,,,,
盛岡第一高校,東北,岩手,5,1,5,43,3,3,1,1,1,6,4,1,12,9,,,,,,,
仙台第一高校,東北,宮城,2,2,7,71,1,2,,4,,6,7,7,9,4,,,,,,,
仙台第二高校,東北,宮城,12,4,9,78,3,2,1,4,,4,8,2,22,14,,,,,,,
仙台二華高校,東北,宮城,1,2,3,28,,1,1,1,,1,2,2,11,2,,,,,,,
磐城高校,東北,福島,3,3,,21,1,,1,1,,6,2,2,5,1,,,,,,,
福島高校,東北,福島,2,,2,20,1,3,,1,,3,7,1,8,7,,,,,,,
安積高校,東北,福島,4,4,7,24,,1,,2,,5,12,5,18,10,,,,,,,
秋田高校,東北,秋田,8,,7,36,3,2,,2,,4,8,,3,3,,,,,,,
山形東高校,東北,山形,5,1,5,53,2,1,,,2,1,6,2,7,6,,,,,,,
宇都宮高校,関東,栃木,20,2,10,40,5,2,1,4,1,4,10,6,47,34,,,,,,,
水戸第一高校,関東,茨城,7,6,11,17,6,5,1,5,,21,11,3,39,18,,,,,,,
土浦第一高校,関東,茨城,14,5,4,15,2,1,1,2,1,34,5,1,32,8,,,,,,,
並木中等教育学校,関東,茨城,12,2,4,7,2,4,1,1,1,17,5,1,33,14,,,,,,,
前橋高校,関東,群馬,6,4,8,22,1,2,2,3,,3,7,5,27,18,,,,,,,
高崎高校,関東,群馬,7,2,5,12,2,2,2,2,1,4,6,5,27,27,,,,,,,
前橋高校女子高校,関東,群馬,3,3,1,8,1,,2,1,,10,8,,14,13,,,,,,,
中央中等教育学校,関東,群馬,5,7,,7,1,,1,,,3,5,1,21,15,,,,,,,
川越高校,関東,埼玉,10,6,10,15,9,10,3,2,2,3,10,14,77,43,,,,,,,
大宮高校,関東,埼玉,19,7,7,16,21,11,,1,3,15,12,4,112,52,,,,,,,
県立浦和高校,関東,埼玉,41,16,12,22,8,15,,2,3,18,9,13,109,61,,,,,,,
浦和第一女子高校,関東,埼玉,2,2,5,12,7,2,,1,,6,9,3,56,9,,,,,,,
市立浦和高校,関東,埼玉,6,,5,7,7,4,,1,,7,14,2,62,22,,,,,,,
東葛飾高校,関東,千葉,5,1,4,5,5,8,,2,1,22,37,3,110,27,,,,,,,
県立千葉高校,関東,千葉,21,9,4,7,18,14,,5,,13,42,8,144,88,,,,,,,
県立船橋高校,関東,千葉,13,4,8,11,24,19,1,7,1,17,40,3,117,55,,,,,,,
大泉高校,関東,東京,8,2,,3,3,4,,,,,5,1,50,24,,,,,,,
桜修館中等教育学校,関東,東京,8,3,3,3,7,3,,1,2,1,1,2,48,27,,,,,,,
立川高校,関東,東京,4,5,7,3,9,10,1,1,,6,5,15,58,30,,,,,,,
立川国際中等教育学校,関東,東京,7,,3,1,1,5,1,,1,1,,1,28,18,,,,,,,
日比谷高校,関東,東京,81,9,8,9,15,18,,1,2,3,12,15,207,122,,,,,,,
小石川中等教育学校,関東,東京,16,6,4,1,7,2,,,1,8,4,2,60,29,,,,,,,
西高校,関東,東京,19,20,17,11,9,13,1,1,2,1,6,7,134,77,,,,,,,
戸山高校,関東,東京,9,3,9,6,21,12,2,4,3,7,13,14,104,41,,,,,,,
都立武蔵高校,関東,東京,6,3,1,5,3,9,,,1,2,1,5,49,13,,,,,,,
両国高校,関東,東京,7,1,,1,4,1,2,1,,4,7,,47,17,,,,,,,
国立高校,関東,東京,13,16,11,15,16,18,4,4,3,6,,5,100,70,,,,,,,
横浜SF高校,関東,神奈川,2,5,7,5,8,2,1,1,1,5,2,14,26,15,,,,,,,
湘南高校,関東,神奈川,18,6,10,13,14,16,3,5,2,2,6,40,127,139,,,,,,,
柏陽高校,関東,神奈川,5,2,8,18,10,6,2,1,1,2,1,44,62,55,,,,,,,
横浜翠嵐高校,関東,神奈川,74,11,8,12,11,10,1,7,2,5,1,36,233,173,,,,,,,
新潟高校,中部,新潟,12,5,9,26,4,2,,5,2,10,12,7,23,17,,,,,,,
長野高校,中部,長野,8,4,7,10,3,1,6,4,5,3,11,5,26,16,,,,,,,
松本深志高校,中部,長野,1,5,4,8,3,,12,7,1,6,6,2,5,7,,,,,,,
上田高校,中部,長野,3,2,4,5,1,,,4,1,,6,3,16,5,,,,,,,
岐阜高校,中部,岐阜,15,21,11,2,,1,37,10,3,6,,5,36,32,,9,,,,,
富山中部高校,中部,富山,18,12,12,11,3,1,3,18,1,,,,20,21,24,4,,,24,2,
高岡高校,中部,富山,2,4,7,4,1,,10,11,,,,,12,2,34,7,,,35,8,
金沢泉丘高校,中部,石川,23,34,21,17,3,2,13,57,8,,,,18,9,55,23,,,13,17,
金大付属高校,中部,石川,7,4,1,2,1,2,,,1,,,,6,9,21,1,,,5,1,
武生高校,中部,福井,3,3,2,,1,,4,7,,,,,7,1,27,7,,,19,5,
高志高校,中部,福井,6,2,,,1,,4,8,1,,,,5,6,19,3,,,18,7,
藤島高校,中部,福井,8,15,4,1,1,1,9,20,,,,,13,6,31,12,,,10,9,
甲府南高校,中部,山梨,2,3,2,6,3,1,5,2,1,2,1,1,9,3,,,,,,,
静岡高校,中部,静岡,16,10,8,3,4,2,10,8,1,8,,9,36,20,,5,,,,,
浜松北高校,中部,静岡,11,15,13,7,3,3,14,15,3,4,,8,45,18,,11,,,,,
磐田南高校,中部,静岡,5,5,1,3,1,,6,5,3,1,,4,14,7,,2,,,,,
富士高校,中部,静岡,5,4,1,6,3,1,5,6,1,5,,2,11,5,,2,,,,,
一宮高校,中部,愛知,4,22,7,1,3,1,77,4,4,4,,2,21,16,,8,,,,,
旭丘高校,中部,愛知,28,46,9,9,3,2,51,10,4,5,,11,47,35,,4,,,,,
刈谷高校,中部,愛知,5,19,6,2,,1,79,10,5,4,,4,17,16,,8,,,,,
時習館高校,中部,愛知,5,7,7,1,1,5,42,12,5,2,,3,22,11,,4,,,,,
岡崎高校,中部,愛知,20,32,6,1,,1,66,16,3,3,,7,32,20,,7,,,,,
明和高校,中部,愛知,7,17,7,3,3,2,78,12,,3,,3,29,18,,7,,,,,
膳所高校,近畿,滋賀,3,44,3,1,1,,3,36,3,,,,21,3,3,21,,,,30,
彦根東高校,近畿,滋賀,1,5,1,,,1,2,17,3,,,,1,3,13,9,,,4,5,
西京高校,近畿,京都,3,28,9,,1,1,3,25,1,,,,3,14,1,14,,,1,20,
洛北高校,近畿,京都,1,16,4,1,,,1,10,1,,,,3,3,2,11,,,,5,
嵯峨野高校,近畿,京都,,17,7,2,,1,,15,3,,,,3,1,1,19,,,5,14,
堀川高校,近畿,京都,2,42,4,1,1,1,4,11,1,,,,8,8,1,20,,,,24,
茨木高校,近畿,大阪,,32,5,6,,,1,79,3,,,,8,7,,30,,,,48,
大手前高校,近畿,大阪,,15,2,,2,,2,39,3,,,,5,3,,23,,,,59,
北野高校,近畿,大阪,11,106,5,2,1,1,4,61,1,,,,17,20,1,31,,,,41,
大阪教大付属高校池田,近畿,大阪,3,13,2,,,1,1,21,,,,,5,1,1,10,,,1,13,
三国丘高校,近畿,大阪,,23,2,1,,1,1,43,3,,,,6,2,,22,,,,60,
天王寺高校,近畿,大阪,4,53,7,4,1,1,3,54,4,,,,10,6,1,35,,,,58,
加古川東高校,近畿,兵庫,3,13,2,1,1,1,1,31,6,,,,6,1,1,22,,,1,4,
神戸高校,近畿,兵庫,3,25,12,,2,2,4,29,5,,,,7,6,1,52,,,1,23,
長田高校,近畿,兵庫,7,26,5,5,1,1,3,44,10,,,,12,6,,44,,,,22,
姫路西高校,近畿,兵庫,3,18,5,5,1,,2,25,8,,,,8,5,,27,,,,13,
神戸大付属中等教育学校,近畿,兵庫,5,8,1,2,1,1,2,13,1,,,,9,7,,7,,,2,6,
市立西宮高校,近畿,兵庫,1,12,,1,1,,1,32,2,,,,2,6,,43,,,1,26,
奈良高校,近畿,奈良,,28,2,,,,,43,2,,,,3,4,1,25,,,,55,
向陽高校,近畿,和歌山,,7,2,,1,,6,5,5,,,,1,5,1,2,,,,5,
四日市高校,近畿,三重,10,18,12,6,2,4,40,10,2,1,,2,9,6,,8,,,,,
津高校,近畿,三重,2,4,3,1,,,16,9,,,,2,7,3,,2,,,,,
鳥取西高校,中国,鳥取,2,6,,3,1,1,2,5,3,3,,,3,4,,7,11,9,,,45
出雲高校,中国,島根,1,2,3,1,,,,8,5,1,,,2,1,,7,27,26,,3,9
広島大付属高校,中国,広島,4,12,2,1,3,3,2,12,8,1,,,22,10,,6,30,4,,3,
広島大付属福山高校,中国,広島,10,12,3,,2,,,17,8,1,,,17,11,,8,22,11,,2,2
広島高校,中国,広島,5,6,4,,1,,,12,12,,,,5,2,,8,45,5,,1,1
基町高校,中国,広島,,10,3,,,,2,13,19,3,,,12,5,,8,56,4,,9,2
岡山大安寺中等教育学校,中国,岡山,9,7,2,1,,1,2,10,7,,,,8,8,,6,10,19,,,3
倉敷天城高校,中国,岡山,3,4,,2,,,1,9,2,,,,7,1,,5,3,35,,5,5
岡山操山高校,中国,岡山,4,8,1,,,,4,7,6,6,,,5,1,,5,6,39,,4,5
岡山朝日高校,中国,岡山,21,14,3,2,3,2,2,33,16,3,,,17,7,,12,11,48,,7,5
徳山高校,中国,山口,3,6,1,,1,1,,2,9,2,,,8,5,,5,12,15,,3,
山口高校,中国,山口,2,5,4,1,,,1,10,27,,,,4,4,,7,18,24,,5,
松山東高校,四国,愛媛,5,9,4,,2,1,1,17,18,3,,,12,5,,15,16,24,,3,3
城ノ内中等教育学校,四国,徳島,2,5,1,,,1,3,2,1,1,,,5,3,,7,8,6,,3,1
城東高校,四国,徳島,1,4,1,1,,,,5,3,1,,,6,2,,3,11,6,,4,2
高知追手前高校,四国,高知,1,,,,,,1,6,5,1,,,1,,,,5,15,,3,1
丸亀高校,四国,香川,3,5,1,1,,,2,17,3,,,,4,3,,9,11,27,,10,
高松高校,四国,香川,2,16,1,,6,1,1,19,12,2,,,19,15,,15,9,27,,1,11
筑紫丘高校,九州,福岡,3,8,4,1,4,1,3,18,95,1,,,10,10,,4,10,,,,
福岡高校,九州,福岡,4,9,5,3,,,2,18,110,2,,,8,8,,3,6,,,,
小倉高校,九州,福岡,2,5,2,,,1,,6,52,4,,,6,3,,2,15,3,,,
修猷館高校,九州,福岡,12,17,7,4,,3,,17,132,4,,,37,13,,7,8,1,,,
東筑高校,九州,福岡,3,4,1,1,1,,2,3,47,2,,,5,1,,3,12,1,,,
明善高校,九州,福岡,1,7,3,,,2,1,12,55,,,,4,2,,,1,6,,,
佐賀西高校,九州,佐賀,6,4,2,1,,,1,3,31,2,,,3,2,,2,11,5,,,
長崎西高校,九州,長崎,4,6,,1,,,1,6,30,3,,,6,3,,4,13,4,,,
長崎東高校,九州,長崎,2,4,2,1,,,,6,8,3,,,3,,,1,12,1,,,
熊本高校,九州,熊本,19,7,5,1,1,5,2,16,56,2,,,10,4,,10,14,1,,,
済々黌高校,九州,熊本,2,2,4,1,,1,,11,24,2,,,4,4,,4,9,1,,,
大分上野丘高校,九州,大分,10,8,2,,1,,1,21,70,3,,,4,6,,5,10,6,,,
宮崎大宮高校,九州,宮崎,4,3,,,,,2,9,12,2,,,11,4,,1,13,2,,,
宮崎西高校,九州,宮崎,3,6,2,1,2,1,1,4,14,2,,,11,2,,4,3,2,,,
鶴丸高校,九州,鹿児島,5,9,3,2,2,2,3,6,37,4,,,7,5,,5,8,1,,,
那覇国際高校,九州,沖縄,,,,1,,1,1,3,2,7,,,,1,,2,5,2,,,
`;



function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        // 空行をスキップ
        if (currentline.length === 1 && currentline[0] === '') {
            continue;
        }

        for (let j = 0; j < headers.length; j++) {
            // すべての列を文字列として処理
            obj[headers[j]] = (currentline[j] || "").trim(); // 空白を削除
        }

        result.push(obj);
    }

    return result;
}

const schoolData = parseCSV(csvData);

schoolData.forEach(school => {
    console.log(`高校名: ${school['高校名']}, 都道府県: ${school['都道府県']}, 型: ${typeof school['都道府県']}`);
});

let selectedSchool = null;
let selectedUniversities = [];
let achievementResults = ''; // 合格実績を保存する変数
let hintCount = 0; // 選択したヒントの数をカウントする変数
let answerCount = 0; // 回答した回数をカウントする変数

const prefectures = {
    "関東": ["東京", "神奈川", "埼玉", "千葉", "栃木", "茨城", "群馬"],
    "北海道": ["北海道"],
    "東北": ["青森", "岩手", "宮城", "秋田", "山形", "福島"],
    "中部": ["新潟", "長野", "山梨", "岐阜", "静岡", "愛知", "富山", "石川", "福井"],
    "近畿": ["滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山", "三重"],
    "中国": ["鳥取", "島根", "岡山", "広島", "山口"],
    "四国": ["徳島", "香川", "愛媛", "高知"],
    "九州": ["福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄"]
};

const regions = Object.keys(prefectures); // 地方のリストを取得

function populateRegionDropdown() {
    const regionSelect = document.getElementById('region-select');
    regionSelect.innerHTML = ''; // 既存の選択肢をクリア

    // 地方のリストを追加
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // 初期選択を設定
    if (regions.length > 0) {
        regionSelect.value = regions[0]; // 最初の地方を選択
        populatePrefectureDropdown(); // 都道府県の選択肢を更新
    }
}

function showDifficultyScreen() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('difficulty-screen').style.display = 'block';
}

// 難易度に応じた高校のプールを作成
function getSchoolPool(difficulty) {
    let pool = [];
    switch (difficulty) {
        case '初級':
            pool = schoolData.filter(school => {
                const todai = parseInt(school['東京大学']) || 0;
                const kyodai = parseInt(school['京都大学']) || 0;
                return (todai + kyodai) >= 18;
            });
            break;
        case '中級':
            pool = schoolData.filter(school => {
                const todai = parseInt(school['東京大学']) || 0;
                const kyodai = parseInt(school['京都大学']) || 0;
                return (todai + kyodai) >= 9 && (todai + kyodai) <= 17;
            });
            break;
        case '上級':
            pool = schoolData.filter(school => {
                const todai = parseInt(school['東京大学']) || 0;
                const kyodai = parseInt(school['京都大学']) || 0;
                return (todai + kyodai) <= 8;
            });
            break;
        case '厨級':
            pool = schoolData; // 全ての高校
            break;
    }
    return pool;
}

// ゲーム開始時にランダムに高校を選択
function startGame(difficulty) {
    // 合格実績をリセット
    resetResults(); // 新しいゲームを始めるときに合格実績をクリア

    const pool = getSchoolPool(difficulty);
    const randomIndex = Math.floor(Math.random() * pool.length);
    selectedSchool = pool[randomIndex];

    // "厨級"ボタンが押されたときに特別な効果音を再生
    if (difficulty === '厨級') {
        const specialSound = document.getElementById('special-sound');
        specialSound.currentTime = 0; // 音声を最初に戻す
        specialSound.play(); // 音声を再生
    }

    // ゲームを開始するための他の処理を追加
    document.getElementById('difficulty-screen').style.display = 'none';
    document.getElementById('university-screen').style.display = 'block';
    populateUniversityDropdown(); // 大学のプルダウンメニューを初期化
}

function populatePrefectureDropdown() {
    const regionSelect = document.getElementById('region-select');
    const prefectureSelect = document.getElementById('prefecture-select');
    prefectureSelect.innerHTML = ''; // 既存の選択肢をクリア

    const selectedRegion = regionSelect.value;
    if (selectedRegion) {
        const prefectureList = prefectures[selectedRegion];
        prefectureList.forEach(prefecture => {
            const option = document.createElement('option');
            option.value = prefecture;
            option.textContent = prefecture;
            prefectureSelect.appendChild(option);
        });

        // 初期選択を設定
        if (prefectureList.length > 0) {
            prefectureSelect.value = prefectureList[0]; // 最初の都道府県を選択
            populateSchoolDropdown(); // 高校の選択肢を更新
        }
    }
}

function populateSchoolDropdown() {
    const select = document.getElementById('user-answer');
    select.innerHTML = ''; // 既存の選択肢をクリア

    const regionSelect = document.getElementById('region-select');
    const prefectureSelect = document.getElementById('prefecture-select');
    const selectedRegion = regionSelect.value;
    const selectedPrefecture = prefectureSelect.value;

    // CSVデータから高校名を抽出
    schoolData.forEach(school => {
        if (school['地方'] === selectedRegion && school['都道府県'] === selectedPrefecture) {
            const option = document.createElement('option');
            option.value = school['高校名'];
            option.textContent = school['高校名'];
            select.appendChild(option);
        }
    });
}

function populateUniversityDropdown() {
    const select = document.getElementById('university-select');
    select.innerHTML = ''; // 既存の選択肢をクリア
    const universities = ['東京大学', '京都大学', '北海道大学', '東北大学', '東京科学大学', '一橋大学', '名古屋大学', '大阪大学', '九州大学', '筑波大学', '千葉大学', '横浜国立大学', '早稲田大学', '慶応義塾大学', '金沢大学', '神戸大学', '広島大学', '岡山大学','富山大学','大阪公立大学','鳥取大学'];

    universities.forEach(university => {
        // 既に選択済みの大学を除外
        if (!selectedUniversities.some(selected => selected.includes(university))) {
            const option = document.createElement('option');
            option.value = university;
            option.textContent = university;
            select.appendChild(option);
        }
    });
}

function selectUniversityFromDropdown() {
    const select = document.getElementById('university-select');
    const selectedUniversity = select.value;
    selectUniversity(selectedUniversity);
}

function selectUniversity(university) {
    document.getElementById('university-screen').style.display = 'none';
    document.getElementById('correct-screen').style.display = 'block';
    
    // お題の高校の進学実績を表示
    const count = selectedSchool[university] || 0;
    const result = `${university}: ${count > 0 ? count + '人' : '0人もしくはデータなし'}`;
    selectedUniversities.push(result);
    achievementResults = selectedUniversities.join('<br>'); // 合格実績を保存
    document.getElementById('school-results').innerHTML = achievementResults; // 合格実績を表示

    // ヒント合格者数を表示
    displayHintAchievement(); // 引数を渡さずに呼び出す

    // ヒントの数をカウント
    hintCount++;

    // answer-screenに合格者数を表示
    document.getElementById('hint-achievement-answer-screen').innerHTML = achievementResults; // 合格者数を表示
}

function displayHintAchievement() {
    // すべての選択された大学の合格者数を表示
    const hintResults = selectedUniversities.map(university => {
        const [name, count] = university.split(': ');
        return `${name}: ${count === '0人' ? '0人もしくはデータなし' : count}`;
    }).join('<br>'); // 選択された大学の合格者数を結合
    document.getElementById('hint-achievement').innerHTML = hintResults; // 合格者数を表示
    document.getElementById('hint-achievement').style.display = 'block'; // 要素を表示
}

function useHint() {
    // ヒントを選択する処理を実装
    // ページ4を非表示にし、ページ2を表示
    document.getElementById('correct-screen').style.display = 'none'; // ページ4を非表示
    document.getElementById('university-screen').style.display = 'block'; // ページ2を表示

    // 選択した大学の合格者数をリセット
    selectedUniversities = []; // 選択した大学のリストをクリア
}

function retryAnswer() {
    // もう一度回答する処理を実装
    document.getElementById('incorrect-screen').style.display = 'none'; // ページ7を非表示
    document.getElementById('answer-screen').style.display = 'block'; // ページ4を表示
}

function giveUp() {
    // ページ7を非表示にし、ページ8を表示
    document.getElementById('incorrect-screen').style.display = 'none'; // ページ7を非表示
    document.getElementById('give-up-screen').style.display = 'block'; // ページ8を表示

    // 正解の高校名を表示
    const correctSchoolName = selectedSchool['高校名'];
    document.getElementById('give-up-correct-school-name').textContent = correctSchoolName;
}

function startNewGame() {
    // すべての画面を非表示にする
    document.getElementById('result-screen').style.display = 'none'; // ページ5を非表示
    document.getElementById('correct-screen').style.display = 'none'; // ページ4を非表示
    document.getElementById('university-screen').style.display = 'none'; // ページ2を非表示
    document.getElementById('answer-screen').style.display = 'none'; // ページ3を非表示
    document.getElementById('achievement-screen').style.display = 'none'; // ページ6を非表示
    document.getElementById('incorrect-screen').style.display = 'none'; // ページ7を非表示
    document.getElementById('give-up-screen').style.display = 'none'; // ページ8を非表示

    // ページ1を表示
    document.getElementById('start-screen').style.display = 'block'; // ページ1を表示

    // ヒントとして選択した大学をリセット
    selectedUniversities = []; // 選択した大学のリストをクリア
    selectedSchool = null; // 選択した高校もリセット

    // 大学のプルダウンメニューを初期化
    populateUniversityDropdown(); // 全大学を表示
}

function backToStart() {
    // メニューに戻る処理を実装
    document.getElementById('correct-screen').style.display = 'none'; // ページ4を非表示
    document.getElementById('how-to-play-screen').style.display = 'none'; // 遊び方画面を非表示
    document.getElementById('study-mode-screen').style.display = 'none'; // 勉強モード画面を非表示
    document.getElementById('settings-screen').style.display = 'none'; // 設定画面を非表示
    document.getElementById('start-screen').style.display = 'block'; // ページ1を表示
}

function backToUniversitySelection() {
    document.getElementById('correct-screen').style.display = 'none'; // correct-screenを非表示
    document.getElementById('university-screen').style.display = 'block'; // university-screenを表示

    // 大学のプルダウンメニューを更新
    populateUniversityDropdown(); // 大学の選択肢を更新
    // 選択した大学の合格者数を表示したままにする
    document.getElementById('school-results').innerHTML = selectedUniversities.join('<br>');
}

function answer() {
    document.getElementById('correct-screen').style.display = 'none';
    document.getElementById('answer-screen').style.display = 'block';

    // 合格実績を表示
    showAchievementResults(); // 新しい関数を呼び出す
}

function showAchievementResults() {
    const achievementElement = document.getElementById('school-results'); // 合格実績を表示する要素を取得
    const results = selectedUniversities.map(university => {
        const universityName = university.split(':')[0]; // 大学名を取得
        const count = selectedSchool[universityName] || 0; // 合格者数を取得
        return `${universityName}: ${count > 0 ? count + '人' : '0人もしくはデータなし'}`; // 表示用の文字列を作成
    }).join('<br>'); // 改行で結合

    achievementElement.innerHTML = results; // 合格実績を表示
    achievementElement.style.display = 'block'; // 要素を表示
}

function displayAchievementHint() {
    const hintAchievementElement = document.getElementById('hint-achievement'); // hint-achievement要素を取得
    const hintResults = selectedUniversities.join('<br>'); // 選択された大学の合格者数を結合
    hintAchievementElement.innerHTML = hintResults; // 合格者数を表示
    hintAchievementElement.style.display = 'block'; // 要素を表示
}

function submitAnswer() {
    const userAnswer = document.getElementById('user-answer').value;

    // 正解の高校名を取得
    const correctSchoolName = selectedSchool['高校名'];

    // ユーザーの回答を表示
    document.getElementById('user-answer-display').innerHTML = `あなたの回答：${userAnswer}`; // ユーザーの回答を表示

    // 合格実績を表示
    const results = Object.keys(selectedSchool)
        .filter(key => key !== '高校名' && key !== '地方' && key !== '都道府県') // 高校名、地方、都道府県を除外
        .map(key => {
            const value = selectedSchool[key];
            return `${key}: ${value || 0}人`; // 数字のところには「人」を付ける
        })
        .join('<br>');

    document.getElementById('school-results').innerHTML = results; // school-results に表示

    // 回答回数をカウント
    answerCount++;

    // 正解かどうかをチェック
    if (userAnswer === correctSchoolName) {
        
        // 正解の効果音を再生
        const correctSound = document.getElementById('correct-sound');
        correctSound.currentTime = 0; // 音声を最初に戻す
        correctSound.play(); // 音声を再生

        // 合格実績を表示する関数を呼び出す
        showAchievementResults(); // 合格実績を表示する関数を呼び出す

        // ページ5を表示
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('result-school-name').textContent = correctSchoolName;

        // ヒントの数と回答回数を表示
        document.getElementById('hintaa-count').textContent = `選択したヒントの数: ${hintCount}`;
        document.getElementById('answer-count').textContent = `回答した回数: ${answerCount}`;

        document.getElementById('answer-screen').style.display = 'none'; // ページ4を非表示
        document.getElementById('correct-screen').style.display = 'none'; // 既存の正解画面を非表示
    } else {

        // 不正解の効果音を再生
        const incorrectSound = document.getElementById('incorrect-sound');
        incorrectSound.currentTime = 0; // 音声を最初に戻す
        incorrectSound.play(); // 音声を再生

        // 不正解のメッセージを表示する処理を追加
        document.getElementById('answer-screen').style.display = 'none'; // ページ4を非表示
        document.getElementById('incorrect-screen').style.display = 'block'; // ページ7を表示
    }
}

function viewResults() {
    // 選択された高校の進学実績を表示
    const schoolName = selectedSchool['高校名'];
    const results = Object.keys(selectedSchool)
        .filter(key => key !== '高校名' && key !== '地方' && key !== '都道府県') // 高校名、地方、都道府県を除外
        .map(key => {
            const value = selectedSchool[key];
            // 値が空の場合は「0人またはデータなし」と表示
            if (!value) {
                return `${key}: 0人またはデータなし`;
            } else {
                return `${key}: ${value}人`; // 数字のところには「人」を付ける
            }
        })
        .join('<br>');

    // ページ6にデータを表示
    document.getElementById('achievement-school-name').textContent = schoolName;
    document.getElementById('achievement-results').innerHTML = results;

    // ページを切り替え
    document.getElementById('result-screen').style.display = 'none'; // ページ5を非表示
    document.getElementById('achievement-screen').style.display = 'block'; // ページ6を表示

    // ページ7を非表示にする
    document.getElementById('incorrect-screen').style.display = 'none'; // ページ7を非表示

    // ギブアップ画面を非表示にする
    document.getElementById('give-up-screen').style.display = 'none'; // ページ8を非表示
}

function goBackToPreviousPage() {
    // 現在の画面を非表示にする
    document.getElementById('answer-screen').style.display = 'none'; // answer-screenを非表示
    document.getElementById('incorrect-screen').style.display = 'none'; // incorrect-screenを非表示

    // correct-screenを表示
    document.getElementById('correct-screen').style.display = 'block'; // correct-screenを表示
}

function showHowToPlay() {
    document.getElementById('start-screen').style.display = 'none'; // ページ1を非表示
    document.getElementById('how-to-play-screen').style.display = 'block'; // 遊び方画面を表示
}

function showStudyMode() {
    document.getElementById('start-screen').style.display = 'none'; // ページ1を非表示
    document.getElementById('study-mode-screen').style.display = 'block'; // 勉強モード画面を表示
    populateStudyRegionDropdown(); // 地方のプルダウンメニューを初期化
}

function populateStudyRegionDropdown() {
    const regionSelect = document.getElementById('study-region-select');
    regionSelect.innerHTML = ''; // 既存の選択肢をクリア

    // 地方のリストを追加
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // 初期選択を設定（例: 関東）
    regionSelect.value = '関東'; // 初期選択を「関東」に設定
    populateStudyPrefectureDropdown(); // 初期選択に基づいて都道府県を更新
}

function populateStudyPrefectureDropdown() {
    const regionSelect = document.getElementById('study-region-select');
    const prefectureSelect = document.getElementById('study-prefecture-select');
    prefectureSelect.innerHTML = ''; // 既存の選択肢をクリア

    const selectedRegion = regionSelect.value;
    if (selectedRegion) {
        const prefectureList = prefectures[selectedRegion];
        prefectureList.forEach(prefecture => {
            const option = document.createElement('option');
            option.value = prefecture;
            option.textContent = prefecture;
            prefectureSelect.appendChild(option);
        });

        // 最初の都道府県を自動的に選択
        if (prefectureList.length > 0) {
            prefectureSelect.value = prefectureList[0]; // 最初の都道府県を選択
            populateStudySchoolDropdown(); // 高校の選択肢を更新
        }
    } else {
        // 地域が選択されていない場合は都道府県の選択肢をクリア
        prefectureSelect.innerHTML = '';
    }
}

function populateStudySchoolDropdown() {
    const select = document.getElementById('study-user-answer');
    select.innerHTML = ''; // 既存の選択肢をクリア

    const regionSelect = document.getElementById('study-region-select');
    const prefectureSelect = document.getElementById('study-prefecture-select');
    const selectedRegion = regionSelect.value;
    const selectedPrefecture = prefectureSelect.value;

    // CSVデータから高校名を抽出
    schoolData.forEach(school => {
        if (school['地方'] === selectedRegion && school['都道府県'] === selectedPrefecture) {
            const option = document.createElement('option');
            option.value = school['高校名'];
            option.textContent = school['高校名'];
            select.appendChild(option);
        }
    });
}

function viewStudyResults() {
    const userAnswer = document.getElementById('study-user-answer').value;
    const selectedSchool = schoolData.find(school => school['高校名'] === userAnswer);

    if (selectedSchool) {
        const schoolName = selectedSchool['高校名'];
        const results = Object.keys(selectedSchool)
            .filter(key => key !== '高校名' && key !== '地方' && key !== '都道府県') // 高校名、地方、都道府県を除外
            .map(key => {
                const value = selectedSchool[key];
                // 値が空の場合は「0人またはデータなし」と表示
                if (!value) {
                    return `${key}: 0人またはデータなし`;
                } else {
                    return `${key}: ${value}人`; // 数字のところには「人」を付ける
                }
            })
            .join('<br>');

        // 新しい進学実績画面にデータを表示
        document.getElementById('study-achievement-school-name').textContent = schoolName;
        document.getElementById('study-achievement-results').innerHTML = results;

        // 勉強モード画面を非表示にし、新しい進学実績画面を表示
        document.getElementById('study-mode-screen').style.display = 'none';
        document.getElementById('study-achievement-screen').style.display = 'block';
    } else {
        alert('選択した高校のデータが見つかりませんでした。');
    }
}

function backToStudyMode() {
    // 勉強モード画面に戻る処理
    document.getElementById('study-achievement-screen').style.display = 'none'; // 新しい進学実績画面を非表示
    document.getElementById('study-mode-screen').style.display = 'block'; // 勉強モード画面を表示
}

function playClickSound() {
    const sound = document.getElementById('click-sound');
    sound.currentTime = 0; // 音声を最初に戻す
    sound.play(); // 音声を再生
}

function adjustVolume() {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const clickSound = document.getElementById('click-sound');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    const specialSound = document.getElementById('special-sound'); // 特別な効果音を追加

    // スライダーの値を取得
    const volume = volumeSlider.value; // スライダーの値をそのまま使用

    // 音量を設定
    clickSound.volume = volume;
    correctSound.volume = volume;
    incorrectSound.volume = volume;
    specialSound.volume = volume; // 特別な効果音にも音量を設定

    // 音量の表示を更新
    volumeValue.textContent = Math.round(volume * 100) + '%';
}

function showSettings() {
    document.getElementById('start-screen').style.display = 'none'; // スタート画面を非表示
    document.getElementById('settings-screen').style.display = 'block'; // 設定画面を表示
}

function selectAdditionalHint() {
    // answer-screenを非表示にする
    document.getElementById('answer-screen').style.display = 'none'; // answer-screenを非表示にする

    // university-screenを表示する
    document.getElementById('university-screen').style.display = 'block'; // university-screenを表示

    // 大学のプルダウンメニューを更新
    populateUniversityDropdown(); // 選択済みの大学を除外してプルダウンメニューを更新

    // 既に選択された大学の合格者数を表示
    displaySelectedUniversities(); // 合格者数を表示する関数を呼び出す
}

function displaySelectedUniversities() {
    const hintResults = selectedUniversities.join('<br>'); // 選択された大学の合格者数を結合
    const hintAchievementElement = document.getElementById('hint-achievement'); // university-screen内の要素を取得
    hintAchievementElement.innerHTML = hintResults; // 合格者数を表示
    hintAchievementElement.style.display = 'block'; // 要素を表示
}

function countSchoolsByDifficulty() {
    const counts = {
        初級: 0,
        中級: 0,
        上級: 0,
        厨級: schoolData.length // 厨級は全ての高校
    };

    schoolData.forEach(school => {
        const todai = parseInt(school['東京大学']) || 0;
        const kyodai = parseInt(school['京都大学']) || 0;
        const total = todai + kyodai;

        if (total >= 18) {
            counts.初級++;
        } else if (total >= 9 && total <= 17) {
            counts.中級++;
        } else if (total <= 8) {
            counts.上級++;
        }
    });

    return counts;
}

// 結果を表示
const schoolCounts = countSchoolsByDifficulty();

// ゲーム開始時にプルダウンメニューを初期化
populateRegionDropdown();

function resetResults() {
    // 合格実績をリセットする処理
    document.getElementById('school-results').innerHTML = ''; // 合格実績をクリア
    document.getElementById('hint-achievement').innerHTML = ''; // ヒント合格者数をクリア
}

// 難易度を選択したときに呼び出す関数
function onDifficultySelected() {
    resetResults(); // 合格実績をリセット
    // 新しいゲームを開始する処理
} 