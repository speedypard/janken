type Language = {
    LDW: Array<string>,
    checkedResponse: Array<string>,
    HTMLstrings: Array<string>
}

const EN:Language ={
    LDW: ["You LOSE", "DRAW", "You WIN"],
    checkedResponse: [
        "error occurred",
        "Game was over, press RESET to restart the game",
        "Out of budge",
        "You have to place your bet"
    ],
    HTMLstrings: [
        "Janken Game!",
        "Please enter your name",
        "Hello ",
        "Balance: ",
        "Bet:",
        "Press ✊🖐✌ to start",
    ]
}

const ZH:Language ={
    LDW: ["你輸了", "平手", "你贏了"],
    checkedResponse: [
        "error occurred",
        "遊戲結束，請點選RESET以重新開始",
        "錢包內金錢不足",
        "下注金額不可小於0",
    ],
    HTMLstrings: [
        "猜拳",
        "請輸入你的名字",
        "你好 ",
        "本金：",
        "下注金額：",
        "點選 ✊🖐✌ 以開始",
    ]
}

const JP: Language = {
    LDW: ["負けた", "ドロー", "勝った"],
    checkedResponse: [
        "error occurred",
        "ゲームオーバー、RESETをおして、ゲーム再開にする",
        "お金が足りない",
        "ベットは0以上を置いてください"
    ],
    HTMLstrings: [
        "じゃんけん！",
        "お名前を教えて下さい",
        "こんばんは ",
        "残高：",
        "ベット金額：",
        "✊🖐✌ を押して、ゲームスタートにする",
    ]
}

export const LanguageList: Array<any> = [EN,JP,ZH];