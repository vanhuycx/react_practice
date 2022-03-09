
    $(document).ready(function(){
    
        $.fn.showTooltip = function (options) {
            this.hover(()=> {
                // Set the mouseenter effect
                const title = document.createElement('h5')
                title.innerHTML=options.title

                const description = document.createElement('p')
                description.innerHTML=options.description

                const div = document.createElement('div')
                div.appendChild(title)
                div.appendChild(description)



                document.body.appendChild(div)
            },
            // Leave the mouseleave trigger as blank
            ()=>{})
        };


        $('.tooltip1').showTooltip({
            title:'Title',
            description:'Tooltip shows description'

        })


 
    });