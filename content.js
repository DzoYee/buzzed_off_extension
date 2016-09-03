// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

			var elements = document.getElementsByTagName('*');

			for (var i = 0; i < elements.length; i++) {
			    var element = elements[i];

			    for (var j = 0; j < element.childNodes.length; j++) {
			        var node = element.childNodes[j];

			        if (node.nodeType === 3) {
			            var text = node.nodeValue;
			            var replacedText = text.replace(/okra|kiwi|chocolate|radish|summer herbs|lavendar|roses|peas|potato|onion|cashew|celery|strawberry tree|carambola|starfruit|brazil nut|beet|mustard|rapeseed|broccoli|cauliflower|cabbage|brussels sprouts|chinese cabbage|turnip|canola|pigeon pea|cajan pea|congo bean|jack bean|horse bean|sword bean|chilli pepper|red pepper|bell pepper|green pepper|papaya|safflower|caraway|chestnut|watermelon|tangerine|orange|grapefruit|tangelo|coconut|coffea spp. coffea arabica|coffea canephora|coriander|crownvetch|azarole|cantaloupe|melon|cucumber|squash (plant)|pumpkin|gourd|marrow|zucchini|guar bean|goa bean|quince|lemon|lime|carrot|hyacinth bean|longan|persimmon|durian|cardamom|loquat|buckwheat|feijoa|fennel|strawberry|cotton|sunflower|flax|lychee|lupine|macadamia|acerola|apple|mammee apple|mango|alfalfa|rambutan|cactus|prickly pear|sainfoin|passion fruit|maracuja|avocado|lima bean|kidney bean|haricot bean|adzuki bean|mungo bean|string bean|green bean|scarlet runner bean|allspice|apricot|sweet cherry|sour cherry|plum|greengage|mirabelle|sloe|almond|peach|nectarine|guava|pomegranate|pear|black currant|red currant|rose hips|dogroses|boysenberry|raspberry|blackberry|elderberry|sesame|eggplant|naranjillo|rowanberry|service tree|hog plum|tamarind|clover|white clover|alsike clover|crimson clover|red clover|arrowleaf clover|blueberry|cranberry|broad bean|vetch|cowpea|black-eyed pea|blackeye bean|karite|tomato|grape/gi| '*NOPE*');


			            if (replacedText !== text) {
			                element.replaceChild(document.createTextNode(replacedText), node);
			            }
			        }
			    }
			}

//     });
//   }, false);
// }, false);