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
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  }
  // {
  //   "account":"JC",
  //   "axieMetamaskAddress": "0x4D9DA6A04f5c6E5E028E7ba6B6Eac1FBab082F4E",
  //   "axieRoninAddress": "7239b5c3705a4964e21bdbfebf7147260ad7ea18",
  //   "slp": 0,
  //   "slpOffset": 0,
  //   "daysOffset": 0,
  //   "rate": 0,
  //   "reqRate": 0,
  //   "slpEarned": 0,
  //   "slpFee": 0,
  //   "earnRate": 0.65,
  //   "updated": false
  // },
  
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
               <span class="tag ${accountHighlight}">${ item.account }</span> ${ topPlayerCrown } ${ topRateCrown }
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
    scholarData.sort(helper.sortBySlpDesc);
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
