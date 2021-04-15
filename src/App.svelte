<script lang="ts">
	import { LanguageList } from './LangaugePack';
	export let name: string;
	export let money: number, bet: number, round: number;
	let LanguageCheck = 0;
	let chekd = -1;
	let pc: number,user:number,result:number;
	enum janken {'✊'=0,'🖐'=1,'✌'=2};
	let DateObj: Date = new Date();
	let LOGs: Array<string> =[];
	LOGs[0]=DateObj.toISOString() +', '+ name + ', START';

	function runCheck():void{
		if (round === -1){
			chekd =1;
		}else if (money < bet){
			chekd =2;
		}else if(bet <= 0){
			chekd =3;
		}else{
			chekd =-1;
			runJanken(user);
		}
	}
	function runJanken(user:number):void {
		pc = Math.floor(Math.random()*3);
		let woWin = user - pc;
		if ( woWin === 1 || woWin === -2 ){ result = 1;}
		else if ( woWin === -1 || woWin === 2 ){ result = -1;}
		else {result = 0;}
		money = money + result * bet;
		// console.log("PC",pc,"result",result);
		if (money <= 0){
			round++;
			LOGs[round]= "\n"+round + ", user:" +janken[user] +", PC:" +janken[pc]+", "+LanguageList[LanguageCheck].LDW[result+1]+", GAME OVER, "+ DateObj.toISOString();
			round = -1;
		}else{
			round ++;
			LOGs[round] = "\n"+round + ", user:" +janken[user] +", PC:" +janken[pc]+", "+LanguageList[LanguageCheck].LDW[result+1]+", "+LanguageList[LanguageCheck].HTMLstrings[3]+":"+money;
		}
	}
	function runRESET():void {
		round = 0;
		money = bet = 10;
		LOGs =[];
		LOGs[0]=DateObj.toISOString() +', '+ name + ', START';
		chekd = -1;
	}
	function downloadLogs():void{
		// convert array data into Binary Large Object
		const blob = new Blob([LOGs], { type: 'text/csv;charset=utf-8;' });
		// create link
		const link = document.createElement("a");
		const url = URL.createObjectURL(blob);
		// set link as a download link
		link.setAttribute("href", url);
		link.setAttribute("download", "jankenlogs");
		link.style.visibility = 'hidden';
		//deploy, run and destroy the link
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	// $:{console.log(chekd)}
</script>

<main>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
	<nav>
		<ul id="Langauages">
			<li on:click={()=>LanguageCheck=0}>English</li>
			<li on:click={()=>LanguageCheck=1}>日本語</li>
			<li on:click={()=>LanguageCheck=2}>中文</li>
		</ul>
	</nav>
	<h1>{LanguageList[LanguageCheck].HTMLstrings[0]}</h1>
	<div id="wellcome">
		<label>
			{LanguageList[LanguageCheck].HTMLstrings[1]}
			<input id="name-input" type="text" bind:value={name}/>
		</label>
		<h2>{LanguageList[LanguageCheck].HTMLstrings[2]}{name}!</h2>
	</div>
	<div id="amount">
		<p>{LanguageList[LanguageCheck].HTMLstrings[3]}{money}</p>
		<label id="bet-label">
			{LanguageList[LanguageCheck].HTMLstrings[4]}
			<input id="bet" type="number" bind:value={bet} min=0 max={money}/>
		</label>
	</div>
	<div id="janken-button">
		<button on:click={()=>{user=0;runCheck();}}>✊</button>
		<button on:click={()=>{user=1;runCheck();}}>🖐</button>
		<button on:click={()=>{user=2;runCheck();}}>✌</button>
	</div>
	<div id="round">
		{#if chekd !== -1}
			<p>{LanguageList[LanguageCheck].checkedResponse[chekd]}</p>
		{:else}
			{#if round ===-1}
				<h3>GAME OVER</h3>
			{:else if round ===0}
				<h3>{LanguageList[LanguageCheck].HTMLstrings[5]}</h3>
			{:else}
				<h3>Round:{round}</h3>
				<h3>{LanguageList[LanguageCheck].LDW[result+1]}</h3>
			{/if}
		{/if}
	</div>
	<div id="logs">
		<button on:click={runRESET}>RESET</button>
		<button on:click={downloadLogs}>Download Logs</button>
		<h4>Logs:</h4>
		{#each LOGs as lg}
			<p>{lg}</p>
		{/each}
	</div>
</main>

<style>
	main {
		font-family: 'Noto Sans TC', sans-serif;
		margin:auto 0;
	}
	#Langauages {
		display: flex;
		justify-content: center;
		list-style: none;
		font-size: 1.5em;
		margin: 0;
		padding: 0;
	}
	#Langauages li{
		margin: auto 10px;
	}
	#Langauages li:hover{ 
	background-color:#32e7ff8f;
	cursor: pointer;
	}
	#Langauages li:active{ 
	background-color:#32e7ff8f;
	cursor: pointer;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3.5em;
		font-weight: 100;
		text-align: center;
	}
	#name-input{
		width:130px;
		padding: 2px;
	}
	#wellcome{
	text-align: center;
	}
	#amount {
		display: flex;
		justify-content: space-evenly;
		align-items: baseline;
		/* display: grid;
		grid-template-columns: 30% 30%;
		grid-gap: 10px;
		justify-items: center;
		align-items: center;
		justify-content: center; */
	}
	#bet {
		width: 70px;
		padding: 1px;
		margin: auto 0;
	}
	#janken-button{
		text-align: center;
	}
	#round{
		display: flex;
		justify-content: space-evenly;
	}
	#logs{
		text-align: center;
	}
</style>