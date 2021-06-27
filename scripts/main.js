var GOD_MODE = false;
var minSlp = 3000;
var minRate = 100;
var cutoffRate = 100;
var idealRate = 150;
var slpPriceInPhp = 0;
var scholarData = [
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/496853/axie/axie-full-transparent.png",
    "account":"King Leon",
    "axieMetamaskAddress": "0xa4E56656423adc04c180d886D3e5933cD90a1c46",
    "axieRoninAddress": "ronin:dfa1d3954b381a97340201db1cd89a8372e0fa22",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 11,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 1,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/464498/axie/axie-full-transparent.png",
    "account":"Iyaaa!",
    "axieMetamaskAddress": "0x57a8BC681247e29dA20567D7993f624138dA70B1",
    "axieRoninAddress": "ronin:e270372e0cef4ef1c9a7b72ce8d1b1dbaf7de33d",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 19,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 1,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/715964/axie/axie-full-transparent.png",
    "account":"Turon",
    "axieMetamaskAddress": "0x62DDb5652A3ACA021A0bEF278991D215Ec91918e",
    "axieRoninAddress": "ronin:3c8e77e2bf47676d2b4becd7717a9d597c8c450b",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 21,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/770689/axie/axie-full-transparent.png",
    "account":"Sugar",
    "axieMetamaskAddress": "0xa2D9a05dA208a318C37bC225fd27265FEbc076A0",
    "axieRoninAddress": "ronin:80692f8b99025a0d89e0761766b8d1b45b5c8f0b",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 22,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/558430/axie/axie-full-transparent.png",
    "account":"Bee",
    "axieMetamaskAddress": "0x4B9DAc484cc74549062f7eF318a1127D7A746792",
    "axieRoninAddress": "ronin:a9e8010713620e43543c0b423e8613a95da5dca2",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 22,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/904691/axie/axie-full-transparent.png",
    "account":"Carnifex",
    "axieMetamaskAddress": "0x0c563A9e667A275DB08d72706885a684Bfbb8cAd",
    "axieRoninAddress": "ronin:6ed44d6c72db82928d4fbc8aefe3f20c6b6a73d5",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 24,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/708178/axie/axie-full-transparent.png",
    "account":"Kels",
    "axieMetamaskAddress": "0x8643f14b0c9550aeB7663925aCd3BF060301c4Fc",
    "axieRoninAddress": "ronin:3f801744857114c7456f1c7bbdd90ad83b77209c",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 24,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/824494/axie/axie-full-transparent.png",
    "account":"Scam",
    "axieMetamaskAddress": "0x5B41479A7d2c1b31f564AC4FFD3fFb416D8dDcE9",
    "axieRoninAddress": "ronin:2aa8c8a6471494296883db018c95853d947e0b3f",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 24,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  },
  {
    "avatar":"https://storage.googleapis.com/assets.axieinfinity.com/axies/558294/axie/axie-full-transparent.png",
    "account":"Jeff",
    "axieMetamaskAddress": "0x56891D61761637eBAd34F7Ed6940866fa2fb558E",
    "axieRoninAddress": "ronin:9583520c58416350bfa36256a2ffc12a19af1ecf",
    "slp": 0,
    "slpOffset": 0,
    "daysOffset": 25,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 0.65,
    "updated": false
  }
];

var helper = {
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
    // row += `<td>
    //           <img title="${ item.account }" src="${ item.avatar }" class="avatar">
    //         </td>`;
    row += `<td>
              <span class="tag">${ item.account }</span>
            </td>`;

    // Account
    if (GOD_MODE) {
      row += '<td><small>' + item.account + '</small></td>';
    }

    // Rate/Goal
    var rating = '';
    if (item.rate < cutoffRate) {
      rating = 'is-danger'
    } else if (item.rate < minRate) {
      rating = 'is-warning'
    } else if (item.rate < idealRate) {
      rating = 'is-info';
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
                <span class="tag">${ helper.formatNumber(item.slpFee) }</span>
              </td>`;
    }
    
    // Total Payout
    var slpPayoutStatus = item.slpEarned >= minSlp ? 'is-success' : 'is-dark';
    var earnedPhp = helper.formatMoney(item.slpEarned * slpPriceInPhp);
    row += `<td class="right">
              <span class="control inline">
                <span class="tags has-addons">
                  <span class="tag ${slpPayoutStatus}">${helper.formatNumber(item.slpEarned)} <img src="images/slp.png" class="slp-icon-tiny"></span>
                  <span class="tag is-light"><small class="money">${earnedPhp}</small></span>
                </span>
              </span>
            </td>`
    return row;
  },
  appendData: function(data) {
    var totalSlpEarned = 0;
    var totalEarned = 0;
    var totalSlpFee = 0;
    var totalFee = 0;

    scholarData.sort(helper.sortByRateDesc);
    $.each(data, function (key, item) {
      totalSlpEarned += item.slpEarned;
      totalEarned += item.slpEarned * slpPriceInPhp;
      totalSlpFee += item.slpFee;
      totalFee += item.slpFee * slpPriceInPhp;

      var row = $('<tr>', { html: main.formatRowData(item) });

      row.appendTo($("#scholarsList tbody"));
    });

    ui.totalSlpEarned(totalSlpEarned);
    ui.totalSlpFee(totalSlpFee);
    ui.totalFee(totalFee);
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
    var now = new Date()
    var date = now.getDate();
    var lastday = helper.getLastDayOfMonth(now.getFullYear(), now.getMonth());
    var daysLeft = lastday - date
    ui.daysLeft(daysLeft);

    for (var i = 0; i < scholarData.length ; ++i) {
      (function (i) {
        $.ajax({url: 'https://lunacia.skymavis.com/game-api/clients/' + scholarData[i].axieMetamaskAddress + '/items/1',
        success: function(result){
          var claimable = result.claimable_total + scholarData[i].slpOffset;
          var total = result.total;
          var slpThisMonth = result.total - claimable;
          // SLP current month
          scholarData[i].slp = slpThisMonth;
          // SLP per day
          scholarData[i].rate = scholarData[i].slp <= 0 ? 0 : Math.floor(scholarData[i].slp / (date - scholarData[i].daysOffset));
          // SLP per day needed to reach minimum SLP per month quota
          scholarData[i].reqRate = scholarData[i].slp <= 0 ? 0 : Math.ceil((minSlp - scholarData[i].slp) / (lastday - date));
          // SLP payout
          scholarData[i].slpEarned = Math.ceil(total * scholarData[i].earnRate);
          // SLP fee
          scholarData[i].slpFee = total - scholarData[i].slpEarned;
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
  
  main.tryEnableGodMode();
  main.getSlpPrice();
  main.getAllScholarSlp();
});
