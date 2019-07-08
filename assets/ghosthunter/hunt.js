var searchField =   $("#thinkbig-search-field").ghostHunter({
                results         : "#thinkbig-search-results",
                onKeyUp         : true,
                onPageLoad      : true,
                zeroResultsInfo : false,
                includepages    : true,
                info_template   : "<p id='thinkbig-search-matches'>Number of matches found: {{amount}}</p>",
                result_template : "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate}}</h4>{{description}}</p></a>"
            });
