var minSlp = 3000;
var idealRate = 150;
var slpPriceInPhp = 0;
var scholarData = [
  {
    "name":"LSB",
    "fullName": "Lavlee Badilla",
    "email":"leonkennedy@lavabit.com",
    "account":"King Leon",
    "axieMetamaskAddress": "0xa4E56656423adc04c180d886D3e5933cD90a1c46",
    "axieRoninAddress": "ronin:dfa1d3954b381a97340201db1cd89a8372e0fa22",
    "slp": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 100,
    "updated": false
  },
  {
    "name":"DB",
    "fullName": "Daniel Badilla",
    "email":"zeekillingmachine98@gmail.com",
    "account":"SCH01",
    "axieMetamaskAddress": "0x57a8BC681247e29dA20567D7993f624138dA70B1",
    "axieRoninAddress": "ronin:e270372e0cef4ef1c9a7b72ce8d1b1dbaf7de33d",
    "slp": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 100,
    "updated": false
  },
  {
    "name":"REM",
    "fullName": "Ronn Margallo",
    "email":"philip.c.p.badilla.genesis@gmail.com",
    "account":"SCH02",
    "axieMetamaskAddress": "0x62DDb5652A3ACA021A0bEF278991D215Ec91918e",
    "axieRoninAddress": "ronin:3c8e77e2bf47676d2b4becd7717a9d597c8c450b",
    "slp": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 65,
    "updated": false
  },
  {
    "name":"AZM",
    "fullName": "Alei Margallo",
    "email":"lsksch04@gmail.com",
    "account":"SCH03",
    "axieMetamaskAddress": "0xa2D9a05dA208a318C37bC225fd27265FEbc076A0",
    "axieRoninAddress": "ronin:80692f8b99025a0d89e0761766b8d1b45b5c8f0b",
    "slp": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 65,
    "updated": false
  },
  {
    "name":"JBP",
    "fullName": "Jan Bernard Payumo",
    "email":"lsksch04@gmail.com",
    "account":"SCH04",
    "axieMetamaskAddress": "0x4B9DAc484cc74549062f7eF318a1127D7A746792",
    "axieRoninAddress": "ronin:a9e8010713620e43543c0b423e8613a95da5dca2",
    "slp": 0,
    "rate": 0,
    "reqRate": 0,
    "slpEarned": 0,
    "slpFee": 0,
    "earnRate": 65,
    "updated": false
  },
];

var helper = {
  formatNumber: function(num) {
    return Number(num).toLocaleString('en');
  },
  sortBySlpAsc: function (a, b){
    return ((a.slp > b.slp) ? -1 : ((a.slp < b.slp) ? 1 : 0));
  },
  sortBySlpDesc: function (a, b){
    return ((a.slp < b.slp) ? -1 : ((a.slp > b.slp) ? 1 : 0));
  }
}

var scholar = {
  formatRowData: function(item) {
    var row = '';
    // Name
    row += '<td>' + item.name + '</td>';

    // Email
    //row += '<td> **** </td>';

    // Account
    //row += '<td>' + item.account + '</td>';

    

    // Rate
    if (item.rate >= idealRate) {
      row += '<td class="success right">' + item.rate + '</td>';
    } else {
      row += '<td class="warn right">' + item.rate + '</td>';
    }

    // Goal Rate
    if (item.reqRate > idealRate) {
      row += '<td class="warn right">' + item.reqRate + '</td>';
    } else {
      row += '<td class="success right">' + item.reqRate + '</td>';
    }
    // SLP
    if (item.slp >= minSlp) {
      row += '<td class="success right">' + helper.formatNumber(item.slp) + ' <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png" class="slp-icon-small"></td>';
    } else {
      row += '<td class="right">' + helper.formatNumber(item.slp) + ' <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png" class="slp-icon-small"></td>';
    }

    // Total Unclaimed
    var earnedPhp = helper.formatNumber(item.slpEarned * slpPriceInPhp);
    row += '<td class="right"><strong>' + helper.formatNumber(item.slpEarned) + '</strong> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png" class="slp-icon-small"> <br/>(<small class="money">' + earnedPhp + ')</small></td>';
    
    // Total Fee
    var feePhp = helper.formatNumber(item.slpFee * slpPriceInPhp);
    // row += '<td class="right">' + item.slpFee + ' (<small class="money">' + feePhp + ')</small></td>';
    
    return row;
  },
  
  appendData: function(data) {
    var totalSlpEarned = 0;
    var totalEarned = 0;
    var totalSlpFee = 0;
    var totalFee = 0;

    scholarData.sort(helper.sortBySlpAsc);

    $.each(data, function (key, item) {
      totalSlpEarned += item.slpEarned;
      totalEarned += item.slpEarned * slpPriceInPhp;
      totalSlpFee += item.slpFee;
      totalFee += item.slpFee * slpPriceInPhp;

      $('<tr>', { html: scholar.formatRowData(item) }).appendTo($("#scholarsList tbody"));
    });

    $('#totalSlpEarned').html(Number(totalSlpEarned).toLocaleString('en'));
    $('#totalEarned').html('₱ ' + Number(totalEarned).toLocaleString('en'));
    // $('#totalSlpFee').html(Number(totalSlpFee).toLocaleString('en'));
    // $('#totalFee').html('₱ ' + Number(totalFee).toLocaleString('en'));
  },
  isDataReady: function() {
    return scholarData.filter(function (scholar) { return scholar.updated === false }).length === 0;
  },
  getLastDayOfMonth: function(y,m){
    return  new Date(y, m +1, 0).getDate();
  },
  getSlpPrice: function(){
    $.ajax({url: 'https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25&vs_currencies=php&include_24hr_change=true', success: function(result){
      slpPriceInPhp = result['0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25'].php;

      $('#slpPrice').html('₱ ' + helper.formatNumber(slpPriceInPhp));
    }});
  },
  getSlp: function() {
    var now = new Date()
    var date = now.getDate();
    var lastday = scholar.getLastDayOfMonth(now.getFullYear(), now.getMonth());
    $('#daysLeft').html(lastday - date);
    for (var i = 0; i < scholarData.length ; ++i) {
      (function (i) {
        $.ajax({url: 'https://lunacia.skymavis.com/game-api/clients/' + scholarData[i].axieMetamaskAddress + '/items/1', success: function(result){
          scholarData[i].slp = result.total - result.claimable_total;
          scholarData[i].rate = (scholarData[i].slp / date).toFixed(2);
          scholarData[i].reqRate = (minSlp - scholarData[i].slp) / (lastday - date);
          scholarData[i].slpEarned = Math.round(scholarData[i].slp * (scholarData[i].earnRate / 100));
          scholarData[i].slpFee = scholarData[i].slp - scholarData[i].slpEarned;
          scholarData[i].updated = true;

          if (scholar.isDataReady()) { scholar.appendData(scholarData); }
        }});
      })(i);
    }
  }
}

$( document ).ready(function() {
  scholar.getSlpPrice();
  scholar.getSlp();
});
