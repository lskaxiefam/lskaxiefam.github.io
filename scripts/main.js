var GOD_MODE = false;
var ADMIN = '0xbf8d40f756c4e9b344388dce3d16aeb36df3af24';
var minSlp = 3000;
var minRate = 100;
var cutoffRate = 100;
var idealRate = 150;
var slpPriceInPhp = 0;
var topPlayer = '';
var highestRate = 0;
var showScholarDetails = true;

const AXIE_CLASSES = [
  // Plant
  `<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-plant);"><path d="M14.205 4.357c-.796-.634-1.882-.941-2.89-.74C9.764 3.926 8.53 5.31 8 6.757c-.53-1.447-1.764-2.831-3.314-3.14-1.009-.201-2.095.106-2.891.74C.847 5.112.5 6.291.836 7.45c.255.879 1.11 1.204 1.933 1.364.912.178 1.906.33 2.617.997a4.745 4.745 0 011.233 1.946c.073.218.137.44.19.665.049.203.056.415.096.62.036.19.112.106.19.01.392-.485.692-1.08.905-1.696.213.616.513 1.21.905 1.695.078.097.154.18.19-.01.04-.204.048-.416.096-.619.053-.224.117-.447.19-.665a4.745 4.745 0 011.234-1.946c.71-.666 1.703-.82 2.616-.997.823-.16 1.678-.485 1.933-1.364.335-1.16-.011-2.338-.959-3.093"></path></svg>`,
  // Reptile
  `<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-reptile);"><path d="M13.927 8.056a1.32 1.32 0 00-1.309 1.152c-.135.191-.351.433-.583.476-.189.035-.457-.108-.607-.215a1.779 1.779 0 01-.696-1.186c-.105-.831-.308-2.175.324-2.857.026.001.053.004.08.004a1.47 1.47 0 10-1.263-.72c.058.758-.354 1.554-.954 2a2.022 2.022 0 01-.43.254c-.248.101-.595.1-.84 0a2.018 2.018 0 01-.43-.254c-.6-.446-1.012-1.242-.954-2a1.47 1.47 0 10-1.262.72c.026 0 .052-.003.079-.004.631.682.428 2.026.323 2.857-.057.455-.32.92-.696 1.186-.149.107-.418.25-.607.215-.232-.043-.447-.285-.582-.476a1.32 1.32 0 10-.619 1.294.655.655 0 01.331-.023c.62.122 1.095.604 1.481 1.071.413.499.86.949 1.43 1.262.327.18.672.336 1.029.448.195.06.443.088.647.114.464.06 1.002-.05 1.435-.217.255-.097.502-.214.741-.345.569-.313 1.017-.763 1.43-1.262.386-.467.861-.949 1.48-1.07a.654.654 0 01.331.022 1.321 1.321 0 10.69-2.446"></path></svg>`,
  // Beast
  `<svg width="20" height="20" viewBox="0 0 16 16" style="fill: var(--color-beast);"><path d="M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82M12.713 2.635a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973"></path></svg>`,
  // Aqua
  `<svg width="20" height="20" viewBox="0 0 16 16" style="fill: var(--color-aquatic);"><path d="M15.036 5.73c-.136-.615-.329-1.207-.989-.985-.3.102-.578.285-.843.47a8.114 8.114 0 00-1.82 1.777c-.646-1.22-1.717-2.15-2.73-2.786-1.575-.99-3.155-1.12-4.78-.239C2.5 4.712 1.326 6.03.94 7.717a2.81 2.81 0 00-.051.304c.012.1.027.202.05.304.387 1.686 1.562 3.005 2.935 3.75 1.625.88 3.205.751 4.78-.24 1.013-.636 2.084-1.565 2.73-2.786a8.108 8.108 0 001.82 1.776c.265.186.542.37.843.471.66.222.853-.369.989-.985.165-.747.21-1.522.189-2.29.02-.768-.024-1.543-.19-2.29"></path></svg>`,
  // Bug
  `<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-bug);"><path d="M13.264 3.198c-1.565.33-3.077.994-4.084 2.216A6.19 6.19 0 008 7.704a6.19 6.19 0 00-1.18-2.29C5.813 4.192 4.301 3.527 2.736 3.198c-.357-.075-.75-.181-1.116-.197-.72-.031-.612.948-.616 1.439-.006.666.103 1.328.249 1.979.171.764.311 1.571.851 2.193.356.41.846.692 1.321.972.083.048.169.1.213.183.05.095.033.208.016.313l-.383 2.245c-.029.168-.048.366.081.484a.53.53 0 00.239.105c1.534.367 3.211-.478 4.01-1.774.176-.286.305-.585.399-.893.094.308.223.607.399.893.799 1.296 2.476 2.141 4.01 1.774a.529.529 0 00.238-.105c.13-.118.11-.316.082-.484l-.383-2.245c-.018-.105-.034-.218.016-.313.044-.082.13-.135.212-.183.476-.28.966-.561 1.322-.972.54-.622.68-1.43.851-2.193.146-.65.255-1.313.25-1.98-.005-.49.104-1.47-.617-1.438-.366.016-.759.122-1.116.197z"></path></svg>`
]
const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
var scholarData = [
  {
    "account":"King Leon",
    "axieMetamaskAddress": "0xa4E56656423adc04c180d886D3e5933cD90a1c46",
    "axieRoninAddress": "0xdfa1d3954b381a97340201db1cd89a8372e0fa22",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 1,
    "updated": false
  },
  {
    "account":"Nemesis",
    "axieMetamaskAddress": "0xbf8d40f756c4e9b344388dce3d16aeb36df3af24",
    "axieRoninAddress": "0xddccc56fc5ba1b19f1975eac758f18b93c5e37c1",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 499,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0,
    "updated": false
  },
  {
    "account":"Iyaaa!",
    "axieMetamaskAddress": "0x57a8BC681247e29dA20567D7993f624138dA70B1",
    "axieRoninAddress": "0xe270372e0cef4ef1c9a7b72ce8d1b1dbaf7de33d",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 1388,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 1,
    "updated": false
  },
  {
    "account":"Turon",
    "axieMetamaskAddress": "0x62DDb5652A3ACA021A0bEF278991D215Ec91918e",
    "axieRoninAddress": "0x3c8e77e2bf47676d2b4becd7717a9d597c8c450b",
    "team": [0,3,3],
    "slp": 0,
    "slpOffset": 1138,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Sugar",
    "axieMetamaskAddress": "0xa2D9a05dA208a318C37bC225fd27265FEbc076A0",
    "axieRoninAddress": "0x80692f8b99025a0d89e0761766b8d1b45b5c8f0b",
    "team": [0,1,4],
    "slp": 0,
    "slpOffset": 1027,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Bee",
    "axieMetamaskAddress": "0x4B9DAc484cc74549062f7eF318a1127D7A746792",
    "axieRoninAddress": "0xa9e8010713620e43543c0b423e8613a95da5dca2",
    "team": [0,1,4],
    "slp": 0,
    "slpOffset": 1304,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Sneaky",
    "axieMetamaskAddress": "0x9F739c64C2E2D6c40A780Ddc9b2af7967bd22218",
    "axieRoninAddress": "0x22e0c67f4c3cfc2339ed84534e9a4e3cb3db897e",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Carnifex",
    "axieMetamaskAddress": "0x0c563A9e667A275DB08d72706885a684Bfbb8cAd",
    "axieRoninAddress": "0x6ed44d6c72db82928d4fbc8aefe3f20c6b6a73d5",
    "team": [0,1,3],
    "slp": 0,
    "slpOffset": 931,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Yatv",
    "axieMetamaskAddress": "0x9DC83e9d41a09610a00aB7140033dD5DF7472cab",
    "axieRoninAddress": "0xf2274fcf63ebf77acff7334091b1522d215769cd",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Kels",
    "axieMetamaskAddress": "0x8643f14b0c9550aeB7663925aCd3BF060301c4Fc",
    "axieRoninAddress": "0x3f801744857114c7456f1c7bbdd90ad83b77209c",
    "team": [0,1,3],
    "slp": 0,
    "slpOffset": 844,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Scam",
    "axieMetamaskAddress": "0x5B41479A7d2c1b31f564AC4FFD3fFb416D8dDcE9",
    "axieRoninAddress": "0x2aa8c8a6471494296883db018c95853d947e0b3f",
    "team": [4,4,1],
    "slp": 0,
    "slpOffset": 374,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Jeff",
    "axieMetamaskAddress": "0x56891D61761637eBAd34F7Ed6940866fa2fb558E",
    "axieRoninAddress": "0x9583520c58416350bfa36256a2ffc12a19af1ecf",
    "team": [0,1,3],
    "slp": 0,
    "slpOffset": 716,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Jpee",
    "axieMetamaskAddress": "0x4EC10D980A1f8f7B25F6bAA941EF311832763977",
    "axieRoninAddress": "0x3da2037225c120d557154cf138142eed6a1ccaf3",
    "team": [0,1,2],
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 3,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "account":"Hobs",
    "axieMetamaskAddress": "0x4D9DA6A04f5c6E5E028E7ba6B6Eac1FBab082F4E",
    "axieRoninAddress": "0x7239b5c3705a4964e21bdbfebf7147260ad7ea18",
    "team": [0,1,4],
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 3,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  }
];
var accounting = {
  getTotalSlpEarned: function() {
    var total = 0;
    $.each(scholarData, function (key, scholar) {
      total += scholar.slpEarned;
    });
    return total;
  },
  getTotalPhpEarned: function() {
    return this.getTotalSlpEarned() * slpPriceInPhp;
  },
  getTotalSlpFee: function() {
    var total = 0;
    $.each(scholarData, function (key, scholar) {
      total += scholar.slpFee;
    });
    return total;
  },
  getTotalPhpFee: function() {
    return this.getTotalSlpFee() * slpPriceInPhp;
  },
}
var helper = {
  slpTpPhp: function(slp) {
    return this.formatMoney(slp * slpPriceInPhp);
  },
  formatNumber: function(num) {
    return Number(num).toLocaleString('en-US');
  },
  formatMoney: function(num) {
    return Number(num).toLocaleString('en-US', {style: "decimal", minimumFractionDigits: 2});
  },
  sortBySlpDesc: function (a, b){
    return ((a.slp > b.slp) ? -1 : ((a.slp < b.slp) ? 1 : 0));
  },
  sortBySlpAsc: function (a, b){
    return ((a.slp < b.slp) ? -1 : ((a.slp > b.slp) ? 1 : 0));
  },
  sortByRateDesc: function (a, b){
    return ((a.rate > b.rate) ? -1 : ((a.rate < b.rate) ? 1 : 0));
  },
  sortByRateAsc: function (a, b){
    return ((a.rate < b.rate) ? -1 : ((a.rate > b.rate) ? 1 : 0));
  },
  getUrlVars: function() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getLastDayOfMonth: function(y,m){
    return  new Date(y, m +1, 0).getDate();
  },
  closeAnnouncement: function() {

  }
}
var ui = {
  slpPrice: function(value) {
    var payout1 = 2600 * value;
    var payout2 = 4200 * value;
    $('#slpPrice').html('₱' + helper.formatNumber(value));
    $('#payout1').html('₱' + helper.formatNumber(payout1));
    $('#payout2').html('₱' + helper.formatNumber(payout2));
  },
  totalSlpEarned: function(value) {
    $('#totalSlpEarned').html(helper.formatNumber(value));
  },
  totalSlpFee: function(value) {
    $('#totalSlpFee').html(Number(value).toLocaleString('en'));
  },
  totalFee: function(value) {
    $('#totalFee').html('₱' + Number(value).toLocaleString('en'));
  },
  daysLeft: function(value) {
    $('#daysLeft').html(value);
  },
  toggleScholarViewer: function() {
    showScholarDetails = !showScholarDetails;
    this.updateScholarViewer();
  },
  updateScholarViewer: function() {
    if (showScholarDetails) {
      $('#scholarCardWrapper').show();
      $('#scholarsList').hide();
    } else {
      $('#scholarsList').show();
      $('#scholarCardWrapper').hide();
    }
  },
  showMaintenanceWarning: function() {
    $('#maintenanceAlert').show();
    this.hideStatsTable();
  },
  hideStatsTable: function() {
    $('#scholarsList').hide();
    $('#scholarCardWrapper').hide();
  },
  createScholarCard: function(data) {
    var cardName = data.account;
    var cardRoninAddress = data.axieRoninAddress;
    var slpPerDay = helper.formatNumber(data.rate);
    var slpThisMonth = helper.formatNumber(data.slp);
    var totalSlpInWallet = helper.formatNumber(data.total);
    var fee = helper.formatNumber(data.slpFee);
    var payout = helper.formatNumber(data.slpEarned);

    var slpPerDayPhp = helper.slpTpPhp(data.rate);
    var slpThisMonthPhp = helper.slpTpPhp(data.slp);;
    var totalSlpInWalletPhp = helper.slpTpPhp(data.total);;
    var feePhp = helper.slpTpPhp(data.slpFee);;
    var payoutPhp = helper.slpTpPhp(data.slpEarned);;
    var daysFarmed = new Date().getUTCDate();
    var currentMonth = MONTH[new Date().getUTCMonth()].toUpperCase();

    return `
    <div class="card">
      <div class="card-content">
        <div class="media">
          
          <div class="media-content">
            <p class="title is-4">${cardName}</p>
            <p class="subtitle is-6"><span class="tag is-info is-light">${cardRoninAddress}</span></p>
          </div>
        </div>        
        <div class="content">
          <table>
            <thead>
              <tr>
                <th colspan="2" style="text-align: center;">${currentMonth} STATS</th>
                <th class="right">in PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>per day</td>
                <td class="right">
                  ${slpPerDay}
                </td>
                <td class="right value">
                  <small class="money">${slpPerDayPhp}</small>
                </td>
              </tr>
              <tr>
                <td>${daysFarmed} day(s)</td>
                <td class="right">
                  ${slpThisMonth}
                </td>
                <td class="right value">
                  <small class="money">${slpThisMonthPhp}</small>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colspan="3" style="text-align: center;">MY WALLET</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>total</td>
                <td class="right">
                  ${totalSlpInWallet}
                </td>
                <td class="right value">
                  <small class="money">${totalSlpInWalletPhp}</small>
                </td>
              </tr>
              <tr>
                <td>fee</td>
                <td class="right">
                  - ${fee}
                </td>
                <td class="right value">
                  - <small class="money">${feePhp}</small>
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
      </div>
      <footer class="card-footer">
        <span class="card-footer-item">Next Payout</span>
        <span class="card-footer-item">
          <strong>${payout} <img src="images/slp.png" class="slp-icon-tiny"></strong>
          &nbsp;
          (<small class="money">${payoutPhp}</small>)
        </span>
      </footer>
    </div>`;
  },
  appendCard: function(scholar) {
    var card = this.createScholarCard(scholar);
    $(card).appendTo('#scholarCardWrapper')
  }
}
var auth = {
  identity: '',
  tryAutoLogin: function() {
    this.login(localStorage.getItem('identity'));
  },
  login: function(passcode) {
    try {
      this.identity = atob(passcode);
    } catch {
      // Swallow
    }
    
    if (!this.isValidCredentials()) {
      $('#passcode').addClass('is-danger');
    } else {
      localStorage.setItem('identity', passcode);
      main.getAllScholarSlp();
      this.closeForm();
    }
  },
  isValidCredentials: function() {
    return scholarData.filter(s => s.axieRoninAddress === this.identity).length > 0;
  },
  logout: function() {
    localStorage.removeItem('identity');
    location.reload();
  },
  closeForm: function() {
    $('#loginForm').hide();
  },
  openForm: function() {
    $('#loginForm').show();
  },
}

var main = {
  tryEnableGodMode: function() {
    GOD_MODE = helper.getUrlVars()['mode'] === 'god';
    if (GOD_MODE) {
      $(".insight").removeClass("insight");
    }
  },
  formatRowData: function(item) {
    var row = '';
    // Team
    row += `<td>
              ${AXIE_CLASSES[item.team[0]] + AXIE_CLASSES[item.team[1]] + AXIE_CLASSES[item.team[2]]}
            </td>`;

    // Name
    var topPlayerCrown = '';
    if (topPlayer === item.account && item.slp > 0) {
      topPlayerCrown = '<i class="fas fa-crown top-player" title="Highest SLP this month"></i>';
    }
    var topRateCrown = '';
    if (highestRate === item.rate && item.slp > 0) {
      topRateCrown = '<i class="fas fa-gem top-rate" title="Highest SLP this month"></i>';
    }
    var accountHighlight = item.axieRoninAddress === auth.identity ? 'is-info' : ''; 
    row += `<td>
               <span class="tag ${accountHighlight}">${ item.account }</span>
            </td>`;

    // Account
    if (GOD_MODE) {
      row += '<td><small>' + item.account + '</small></td>';
    }

    // Rate/Goal
    var rating = '';
    if (item.rate < cutoffRate) {
      rating = 'is-danger'
    } else if (item.rate < idealRate) {
      rating = 'is-light';
    } else if (item.rate >= idealRate) {
      rating = 'is-success';
    }

    row += `<td class="right">
              <span class="tag ${ rating }">${ item.rate }</span>
            </td>`;

    // SLP
    var slpMonthlyStatus = item.slp >= minSlp ? 'is-success' : 'is-light';
    row += `<td class="right">
              <span class="tag ${slpMonthlyStatus}">${ helper.formatNumber(item.slp) }</span>
            </td>`;

    // Total Fee
    if (GOD_MODE) {
      row += `<td class="right">
                <span class="tag">${ helper.formatNumber(item.total) }</span>
              </td>`;
      row += `<td class="right">
                <span class="tag">${ helper.formatNumber(item.slpFee) }</span>
              </td>`;
    }
    
    // Total Payout
    var slpPayoutStatus = item.slpEarned >= minSlp ? 'is-success' : 'is-dark';
    var earnedPhp = helper.formatMoney(item.slpEarned * slpPriceInPhp);
    var formattedSlpEarned = helper.formatNumber(item.slpEarned);

    if (item.axieMetamaskAddress === ADMIN) {
      slpPayoutStatus = 'is-dark';
      formattedSlpEarned = 'N/A';
    }
    if (GOD_MODE) {
      row += `<td class="right">
                <span class="tag ${slpPayoutStatus}">${formattedSlpEarned}</span>
              </td>`;
    }
    
    return row;
  },
  appendData: function(data) {
    scholarData.sort(helper.sortByRateDesc);
    topPlayer = data[0].account;

    $.each(data, function (key, scholar) {
      var row = $('<tr>', { html: main.formatRowData(scholar) });
      row.appendTo($("#scholarsList tbody"));

      if (GOD_MODE || scholar.axieRoninAddress === auth.identity) {
        ui.appendCard(scholar);
      }
    });

    this.calculateSummary();
  },
  calculateSummary: function() {
    ui.totalSlpEarned(accounting.getTotalSlpEarned());
    ui.totalSlpFee(accounting.getTotalSlpFee());
    ui.totalFee(accounting.getTotalPhpFee());
  },
  isDataReady: function() {
    return scholarData.filter(function (scholar) { return scholar.updated === false }).length === 0;
  },  
  getSlpPrice: function(){
    $.ajax({url: 'https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25&vs_currencies=php&include_24hr_change=true', success: function(result){
      slpPriceInPhp = result['0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25'].php;
      ui.slpPrice(slpPriceInPhp);
    }});
  },
  getAllScholarSlp: function() {
    var now = new Date();
    var date = now.getUTCDate();
    var lastday = helper.getLastDayOfMonth(now.getUTCFullYear(), now.getUTCMonth());
    var daysLeft = lastday - date
    ui.daysLeft(daysLeft);

    for (var i = 0; i < scholarData.length ; ++i) {
      (function (i) {
        $.ajax({url: 'https://lunacia.skymavis.com/game-api/clients/' + scholarData[i].axieRoninAddress + '/items/1',
        success: function(result){
          // claimed + unclaimed
          var total = result.total;
          // claimed SLP
          var claimed = result.claimable_total + scholarData[i].slpOffset;
          // unclaimed SLP
          var unclaimed = total - claimed;

          // SLP total
          scholarData[i].total = total;

          // SLP current month
          scholarData[i].slp = unclaimed;

          // SLP rate per day
          scholarData[i].rate = scholarData[i].slp > 0 ? Math.floor(scholarData[i].slp / (date - scholarData[i].daysOffset)) : 0;
          if (highestRate < scholarData[i].rate) { highestRate = scholarData[i].rate; }

          // SLP per day needed to reach minimum SLP per month quota
          scholarData[i].reqRate = scholarData[i].slp <= 0 ? 0 : Math.ceil((minSlp - scholarData[i].slp) / (lastday - date));

          // SLP payout based on claimed and unclaimed SLP
          scholarData[i].slpEarned = Math.ceil(total * scholarData[i].earnRate);

          // SLP fee
          scholarData[i].slpFee = total - scholarData[i].slpEarned;

          // Recalculate if fee exceeds 1800 SLP
          if (scholarData[i].slpFee > 1800 && scholarData[i].earnRate > 0) {
            var excess = scholarData[i].slpFee - 1800;
            scholarData[i].slpEarned = scholarData[i].slpEarned + excess;
            scholarData[i].slpFee = 1800;
          }

          scholarData[i].updated = true;

          // Do not count admin SLP
          if (scholarData[i].axieMetamaskAddress === ADMIN) {
            scholarData[i].slpEarned = 0;
            scholarData[i].slpFee = 0;
          }

          if (main.isDataReady()) { 
            main.appendData(scholarData);
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          if (jqXHR.status === 403) {
            ui.showMaintenanceWarning();
          }
          console.log(scholarData[i].account, 'Error retrieving SLP information');
          scholarData[i].slp = 0;
          // SLP per day
          scholarData[i].rate = 0;
          // SLP per day needed to reach minimum SLP per month quota
          scholarData[i].reqRate = 150;
          // SLP payout
          scholarData[i].slpEarned = 0;
          // SLP fee
          scholarData[i].slpFee = 0;
          scholarData[i].updated = true;

          if (main.isDataReady()) { 
            main.appendData(scholarData);
          }
        }});
      })(i);
    }
  }
}

// Initialize!
$(document).ready(function() {
  auth.tryAutoLogin();
  ui.updateScholarViewer();
  main.tryEnableGodMode();
  main.getSlpPrice();
});
