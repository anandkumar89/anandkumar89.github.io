
var documents = [{
    "id": 0,
    "url": "http://eigenspace.ml/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://eigenspace.ml/about",
    "title": "",
    "body": "  Anand is structural engineer, an amature photographer and chef by weekend. He loves to relax with mild beethoven's moonlight in background, cup of tea and python. more often than not, he sits long reflecting upon education and research in more philosophical way - and other topics that puzzles his mind. This blog is by product of what comes out of those moments of epiphany.     He has formally obtained a degree in strcutral engineering from Indian Institute of Technology, Kharagpur and Is pursuing further research at IIT Bombay.   Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://eigenspace.ml/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://eigenspace.ml/collections",
    "title": "Collections",
    "body": ""
    }, {
    "id": 4,
    "url": "http://eigenspace.ml/",
    "title": "Home",
    "body": "            All Stories:                                                                      Printing a booklet - the python way              :       I prefer hard copies over soft copy of a book any day. Thus I’ve been printing booklets whose hard copies are hard to get or when I need a section. . . :                                                                             Anand                28 Aug 2019                                                                                                     My lessons in life              :       I came across this article during my JEE preparation. Someone was kind enough to write this entire article on 3 A4 pages in beautiful handwriting and stick on school notice. . . :                                                                             Anand                05 Apr 2019                                                       "
    }, {
    "id": 5,
    "url": "http://eigenspace.ml/poovocab",
    "title": "Vocabulary",
    "body": "                        &times;                                Close            {% assign todayList = site. data. poo. todayList | reverse | group_by_exp: “todayList”, “todayList. word” %}{% for category in todayList %}{{ category. name }} {{ category. size }}{% endfor %} 12345678910111213141516  {% for item in site. data. poo. vocablist %}  &lt;a class= word  data-toggle= tooltip  href= #modalpop_{{forloop. index}}  data-original-title= {{item. meaning}}  data-href= https://vocab. eigenspace. ml/qpoo/{{item. word }} &gt;{{ item. word | capitalize }}&lt;/a&gt;.   &lt;div id= modalpop_{{forloop. index}}  class= popover &gt;   &lt;div class= arrow &gt;&lt;/div&gt;   &lt;h3 class= popover-title &gt;{{ item. word }}&lt;/h3&gt;   &lt;div class= popover-content &gt;    &lt;div class= edit def &gt;{{ item. meaning }}&lt;/div&gt;    &lt;hr/&gt;    &lt;div class= edit example &gt;{{ item. example }}&lt;/div&gt;   &lt;/div&gt;   &lt;div class= popover-footer &gt;&lt;button type= button  class= btn btn-primary popover-submit &gt;    &lt;button type= button  class= btn btn-primary popover-submit &gt;&lt;i class= icon-ok icon-white &gt;&lt;/i&gt;&lt;/button&gt;&amp;nbsp;    &lt;button type= button  class= btn btn-default popover-cancel &gt;&lt;i class= icon-remove &gt;&lt;/i&gt;&lt;/button&gt;   &lt;/div&gt;  &lt;/div&gt; {% endfor %}"
    }, {
    "id": 6,
    "url": "http://eigenspace.ml/quotes",
    "title": "Quotes",
    "body": "{% for item in site. data. quotes %} {{ item. quote | capitalize }} {% endfor %} "
    }, {
    "id": 7,
    "url": "http://eigenspace.ml/vocabulary",
    "title": "GRE Vocabulary",
    "body": "                        &times;                                Close            {% assign todayList = site. data. todayList | reverse | group_by_exp: “todayList”, “todayList. word” %}{% for category in todayList %}{{ category. name }} {{ category. size }}{% endfor %}                Common Words       :            {% for item in site. data. wordListA %} {{ item. word | capitalize }}. {% endfor %}                     Basic Words       :            {% for item in site. data. wordListB %} {{ item. word | capitalize }}. {% endfor %}                     Advanced Words       :            {% for item in site. data. wordList %} {{ item. word | capitalize }}. {% endfor %}      "
    }, {
    "id": 8,
    "url": "http://eigenspace.ml/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 9,
    "url": "http://eigenspace.ml/printing-pdf-as-booklet-using-python/",
    "title": "Printing a booklet - the python way",
    "body": "2019/08/28 - I prefer hard copies over soft copy of a book any day. Thus I’ve been printing booklets whose hard copies are hard to get or when I need a section or chapter of book. Priting a booklet is different than normal paper printing in following sense - left and right margin are not same for booklet. However, most of publicly available pdf have symmetric margin for better readability. Merely adding left margin to each page is not going to solve the problem as margins have to be mirrored on opposite pages for booklet printing. I haven’t been able to find any free to use software where I could easily manipulate margins of odd/even numbered pages or trim extra margin of pages. Which led me to create python based solution. I’ve used pyPDF2 package of python. Please note to install PyPDF2 and not PyPDF as till today (28th Aug 2019) PyPDF has some bugs in python3. 1pip intall PyPDF2I am aditionally using tqdm to track progress of loop. 1234567891011121314151617181920212223242526272829303132333435363738394041inpdf  = pdf. PdfFileReader(open('pdeo. pdf', 'rb'))numpage = inpdf. getNumPages()# user space unit for A4 size paper (default choice for printing in India/ Change to paper of your choice)# note : 1 inch = 72 usutar_w, tar_h = 596 , 842_, _, ow, oh = [float(x) for x in inpdf. getPage(0). mediaBox]outpdf = pdf. PdfFileWriter()# usually 36-40 usu is sufficient for binding purposes, you'll not have to tear the book apart to see text near bindbind_margin = 60 	#usuty     = 180 	#usu, if original pdf is smaller than printing page, ty is bottom margin. for pnum in tqdm(range(numpage)):  page = inpdf. getPage(pnum)    # Trim margins from right and left  page. trimBox. lowerLeft = tuple([a+b for a, b in zip(page. trimBox. lowerLeft, (50, 0))])  page. trimBox. upperRight = tuple([a-b for a, b in zip(page. trimBox. upperRight, (50, 0))])  page. cropBox. lowerLeft = tuple([a+b for a, b in zip(page. cropBox. lowerLeft, (50, 0))])  page. cropBox. upperRight = tuple([a-b for a, b in zip(page. cropBox. upperRight, (50, 0))])  # create empty A4 size page  emptyPage = pdf. PageObject. createBlankPage(width=tarw, height=tarh)  margin_available = tarw + page. mediaBox. lowerLeft[0] - page. mediaBox. upperRight[0]    if pnum%2==0:      tx = bind_margin  else:      tx = margin_available - bind_margin  emptyPage. mergeTranslatedPage(page, tx, ty)  outpdf. addPage(emptyPage)outputStream = open( output. pdf , wb )outpdf. write(outputStream)outputStream. close()Changes required before you can use this script -  set target width, height - (tar_w, tar_h) : which is the width, height of printing paper in usu. 1 usu corresponds to 1/72 of inch.  Usually you’ll not want to change binding margin - but it’s better to keep this variable in mind.  Depending upon size of printing paper and pdf document, you’d want to adjust ty: higher ty would mean more space in bottom. Very large ty may result in clipping of text in top.  If you don’t want to trim margin in original document then you should comment 4 lines intended to trim margin in pdf. Or if your left and right of texts are being clipped, you might want to change 50 in (50,0) tuple according to your observation snd requirement. tuple defines how much you intend to change in (x, y) direction.  Lastly, change the filename as required. Note that this article intends to provide you with a boilerplate to allow you to make a pdf of your own choice suitable to booklet printing or serve your need. You can further read documentations for PyPDF2 for further possibilities. In summary you can extend the script above to achive following -  fit two/multiple pages in single page with minimum margin in between: rotate, scale, transform functions are available in PyPDF2 add blank pages to a pdf add bookmarks to a pdf add watermarks or merge two pdf pages, like overlay ( I can’t see how this can be useful ) rearrange pdf pages split / merge pdf documents any other possibilites you can think of given you can access each page of pdf as python object which can be scaled, rotated and transformed and put in new empty pages. I’d recommend you to go through various boxes - media, trim, crop, art in a pdf page. This could make your trimming experience easier. "
    }, {
    "id": 10,
    "url": "http://eigenspace.ml/lessons-in-life-azim-premji/",
    "title": "My lessons in life",
    "body": "2019/04/05 - I came across this article during my JEE preparation. Someone was kind enough to write this entire article on 3 A4 pages in beautiful handwriting and stick on school notice board. One fine day my curiosity got over my scruples, and I snuck those pages in my diary. It has been there ever since. So there it is - some timeless lessons from Azim Premji. The funny thing about life is that you realize that the value of something only when it begins to leave you. As my hair turned from black to salt and pepper and finally salt without pepper, I’ve begun to realize the importance of youth. At the same time, I’ve begun to truly appreciate some of the lessons I have learned along the way. The first thing I have learnt is that we must always begin with our strengths. From the earliest years of our schooling, everyone focuses on what is wrong with us. There is an imaginary story of a rabbit. The rabbit was enrolled in a rabbit school. Like all rabbits, it could hop very well but could not swim. At the end of the year, the rabbit got high marks in hopping but failed in swimming. The parents were concerned. They said, “forget about hopping. You are good at it. Anyway. Concentrate on swimming. ” They sent the rabbit for tuitions in swimming, and guess what happened? The rabbit forgot how to hop! As for swimming, have you ever seen a rabbit swim? While it is important for us to know what we are not good at we must also cherish what is good in us.  That is because it is only our strengths that can give us the energy to correct our weaknesses. The second lesson I have learnt is that a rupee earned is of far more value than five found. My friend was sharing with me the story of his eight-year-old niece. She would always complain about the breakfast. The cook tried everything possible, but the child remained unhappy.  Finally, my friend took the child to the supermarket and bought one of those ready-to-cook packets. The child had to cut the packet and pour water in the dish. After that, it took two minutes in the microwave to be ready. The child found the food to be absolutely delicious. The difference was that she cooked it! In my own life, I’ve found that nothing gives as much satisfaction as earning our rewards. In fact, what is gifted or inherited follows the old rule of come easy, go easy. I guess we only know the value of what we have struggled to earn it. The third lesson I have learnt is that no one bats a hundred every time. Life has many challenges. You win some and lose some. You must enjoy winning. But do not let it go to the head. The moment it does, you are already on your way to failure.  And if you do encounter failure along the way, treat it as an equally natural phenomenon. Do not beat yourself for it or anyone else for that matter! Accept it, look at your own share in the problem, learn from it and move on. The important thing is, when you lose, do not lose the lesson. The fourth lesson I’ve learnt is the importance of humility. Sometimes, when you get so much in life, you really start wondering whether you deserve all of it. This brings to me the value of gratitude. We have so much to be grateful for. Our parents, our teachers and our seniors have done so much for us that we can never repay them. Many people focus on shortcomings because obviously, no one can be perfect. But it is important first to acknowledge what we have received. Nothing in life is permanent but, when a relationship ends, rather than becoming bitter, we must learn to savor the memory of the good things while they lasted. The fifth lesson I learnt is that we must always strive for excellence. One way of achieving excellence is by looking at those better than ourselves. Keep learning what they do differently. Emulate it. But excellence cannot be imposed from outside. It must become an obsession. It must involve not only our mind but also our heart and soul. Excellence is not an act but habit. I remember the inspiring lines of a poem which say that your reach must always exceed your grasp. That is heaven on earth. Ultimately, your only competition is yourself. The sixth lesson I have learnt is never to give up in the face of adversity. It comes on you suddenly without warning. One can either succumb to self-pity, wring your hands in despair or decide to deal with the situation with courage and dignity.  Always keep in mind that makes us find steel. A friend of mine shared this incident with me. His eight-year-old daughter was struggling away at a jigsaw puzzle. She kept at it for hours but couldn’t succeed. Finally, it went beyond bedtime. My friend told her, “look, why don’t you just give up? I don’t think you will complete it tonight. Look at it another day. ” The daughter replied with a strange look in her eyes, “ but, dad, why should I give up? All the pieces are there! I have just got to put them together!” If we persevere long enough, we can put any problem into its perspective. The seventh lesson I have learnt is that while you must be open to change, do not compromise on your values. Mahatma Gandhi often said that you must open the windows of your mind, but you must not be swept off your feet by the breeze. You must define what your core values are and what you stand for. And those values are not so difficult to define. Values like honesty, integrity, consideration, and sensitivity have survived for generations. Values are not in words used to describe them, as much as in the simple acts. A wise man once said, “You do not have to change the world to make a difference. If on the way to your house, you can bring a smile on the face of a crying child, you have done your bit. ” ==At the end of the day, it is the values that define a person more than the achievements. == Because it is the means of achievement that decide how long achievements will sustain. Do not be tempted by shortcuts. The shortcut can make you lose your way and end up becoming the longest way to the destination. And the final lesson I learnt is that we must have faith in our own words or ideas even if everyone tells us that we are wrong. There was one newspaper vendor who had a rude customer. Every morning, the customer would walk by, refuse to return the greeting, grab the paper off the shelf and throw the money at the vendor.  The vendor would pick up the money, smile politely and say, “Thank you, sir”. One day, the vendor’s assistant asked him, “why are you always so polite with him when he is so rude to you? Why don’t you throw the newspaper at him when he comes back tomorrow ?” The vendor smiled and replied, “He can’t help being rude, and I can’t help being polite. Why should I let his rude behavior dictate my politeness ?”So it is, my young friends, with all of us. In my youth, I thought of myself as a rebel and was many times, a rebel without a cause. Today, I realize that my rebellion was another kind of conformity. We defined our elders to fall in line with our peers! Ultimately, we must learn to respond instead of reacting. When we respond, we evaluate with a calm mind and do whatever is most appropriate. We are in control of our actions. When we react, we are still doing what other person wants us to do. Remember, those who win are those who believe they can. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});