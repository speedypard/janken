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
        "Press âðâ to start",
    ]
}

const ZH:Language ={
    LDW: ["ä½ è¼¸äº", "å¹³æ", "ä½ è´äº"],
    checkedResponse: [
        "error occurred",
        "éæ²çµæï¼è«é»é¸RESETä»¥éæ°éå§",
        "é¢åå§éé¢ä¸è¶³",
        "ä¸æ³¨éé¡ä¸å¯å°æ¼0",
    ],
    HTMLstrings: [
        "çæ³",
        "è«è¼¸å¥ä½ çåå­",
        "ä½ å¥½ ",
        "æ¬éï¼",
        "ä¸æ³¨éé¡ï¼",
        "é»é¸ âðâ ä»¥éå§",
    ]
}

const JP: Language = {
    LDW: ["è² ãã", "ãã­ã¼", "åã£ã"],
    checkedResponse: [
        "error occurred",
        "ã²ã¼ã ãªã¼ãã¼ãRESETãããã¦ãã²ã¼ã åéã«ãã",
        "ãéãè¶³ããªã",
        "ãããã¯0ä»¥ä¸ãç½®ãã¦ãã ãã"
    ],
    HTMLstrings: [
        "ãããããï¼",
        "ãååãæãã¦ä¸ãã",
        "ããã°ãã¯ ",
        "æ®é«ï¼",
        "ãããéé¡ï¼",
        "âðâ ãæ¼ãã¦ãã²ã¼ã ã¹ã¿ã¼ãã«ãã",
    ]
}

export const LanguageList: Array<any> = [EN,JP,ZH];