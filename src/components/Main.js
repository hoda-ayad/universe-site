import React from 'react';
import { motion } from 'framer-motion';
import './../App.css'
import OriginalsChart from './OriginalsChart';


const ObservableChart = ({ link }) => {
    return (
      <iframe
        className="w-full h-96"
        src={link}
      ></iframe>
    );
  };

function Main() {
    return (
        <div className=" max-w-7xl px-9">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: [0, .01, .1, .3, 1], x: 0 }}
                transition={{ opacity: { duration: 2 }, x: { duration: 1.5 } }}
            >
                <h1 className="text-6xl font-bold mb-4 pt-40 pl-3">Movie Universe Draft 1</h1>
                <p className='text-2xl italic'>by Assistant Professor Melanie Walsh and Hoda Ayad, University of Washington iSchool </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="my-10"
            >
                <p className="">
                    The 2024 awards season, culminating in the 96th Academy Awards was filled with anticipation for the performance of massive summer blockbusters Barbie and Oppenheimer. Nominations were announced, Oppenheimer for “Best Picture”,  “Director”, “Actor”, “Supporting Actor” among 9 others and Barbie for “Best Picture”, “Supporting Actor”, “Product Design” and “Adapted Screenplay”
                </p>
          
                <p>
                    Wait… “Best Adapted Screenplay”? Wasn’t Barbie an original story? 
                </p>
               
                <p>
                    Critics and viewers alike seemed baffled at this decision, which contradicted that of the Writers Guild of America to classify the film as having an original screenplay in their own awards.
                </p>

                <img src="/img/variety_headline.png" />
                <img src="/img/washpost_headline.png" />
                <img src="/img/ent_headline.png" />

                <p>
                    The WGA classifies screenplays as non-original when based on previously published material, including sequels and remakes. The Guild sees screenplays based on nonfiction material that doesn’t contain a narrative as original. This means that Gerwig’s Barbie, being based on a doll brand but employing an original narrative, would be an original screenplay. While they do not publish their adapted screenplay guidelines, the Academy seems to disagree. 
                </p>
                
                <p>
                    Barbie’s history with film adaptations is a rich one. In the early 2000s, Mattel began releasing digitally animated childrens’ films that would later be lovingly coined the “Barbie Cinematic Universe”. For many born in the late ‘90s, early ‘00s, the Barbie movies were a cornerstone of their childhood film repertoire. Despite the fact that Gerwig’s Barbie has no canonical connection to these films, their relevance to the success of not only this one but the overall brand is undeniable.
                </p>

                <p>
                    The film releases are referred to as a cinematic universe rather than a series due to their anthology-like nature. It’s easiest to explain by breaking the releases down into two main eras.    
                </p>

                <div className='grid grid-cols-2 py-12'>
                    <div>
                        <p>
                            The adaptation era is characterized by the consistent presence of Barbie as the main character acting in a role as someone else. Adaptations of classic stories like “Rapunzel”, “A Christmas Carol”, and “The Prince and the Pauper” saw the character as [character names], but rarely as herself. 
                        </p>
                        <p>
                            These films are classic examples of film adaptations as understood by the average viewer. The film takes elements from the source material and translates them into a movie format, modifying aspects as needed but keeping the core of the story the same. 
                        </p>
                    </div>
                    <div>
                        <div className='py-1'> <ObservableChart link='https://observablehq.com/embed/6ffcf9e3bf7e8a6c?cells=adaptera' /></div>
                    </div>
                </div>

                <div className='grid grid-cols-2 py-12'>
                    <div>
                        <p>
                            For media scholars, defining adaptation hasn’t been that simple. The 2017 Oxford Handbook of Adaptation Studies collects these disparate perspectives into three main angles: 
                        </p>
    
                        <p>
                            In this context, it’s most relevant to see it as a product. 
                        </p>
    
                        <p>
                            By this definition, even Barbie films that weren’t based on fairytales in this era were adapting the Barbie doll character. We can keep this in mind for later. 
                        </p>
                    </div>
                    <div>
                        <div className='py-1 text-2xl italic'>
                            <p>
                                <b>A process</b> describing “how one or more entities are reconfigured or adjusted through their engagement with or relationship to one or more other texts or objects”,
                            </p>
                            <p>
                                <b>A product</b> resulting “from that engagement or synthesized result of a relationship between two or more activities”, or
                            </p>
                            <p>
                                <b>An act of reception</b> “in which the reading or viewing of that work is actively adapted as a specific form of enjoyment and understanding” 
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 py-12 flex-grow'>
                    <div className='container left-col'>
    
                        <p>
                            The second era of the BCU is the franchise era. This is where Mattel begins to pivot their strategy from one-shot films about Barbie as the main character of a fairytale into series where Barbie adventures as herself. The success of their long term series “Fairytopia” seemed to indicate a desire from audiences for continuity.  
                        </p>
                    </div>
    
                    <div className='flex flex-col flex-grow container right-col'>
                        <ObservableChart link="https://observablehq.com/embed/6ffcf9e3bf7e8a6c?cells=franchera"/>
                    </div>
                </div>
                
                <div className='grid grid-cols-2 py-12 flex-grow'>
                    <div className='flex-grow container left-col'>
                        <p>
                            This did not prove to be the case. As the franchise era progressed, not only did viewers not like the new films… 
                        </p>
                    </div>
    
                    <div className='grow container right-col'>
                        <ObservableChart link={'https://observablehq.com/embed/6ffcf9e3bf7e8a6c@2612?cells=BarbieRatings'} />
                    </div>
                </div>

                <div className='grid grid-cols-2 py-12 flex grow'>
                    <div className='container left-col'>
    
                        <p>
                            …they weren’t even watching them.
                        </p>
                    </div>
    
                    <div className='flex-grow container right-col'>
                        <ObservableChart link='https://observablehq.com/embed/6ffcf9e3bf7e8a6c@2615?cells=BarbieCounts' />
                    </div>
                </div>

                <p>
                    The once beloved Barbie Cinematic Universe fell into what can be called “franchise fatigue”
                </p>

                <p>
                    You may have seen someone talk about “franchise fatigue” or perhaps “superhero fatigue” when referring specifically to Marvel films. The phrase refers to the idea that audiences are getting tired of movies that come from the same franchises. If you’ve ever thought, “I’m getting sick of every movie being a sequel or a remake!” you may have experienced this yourself. 
                </p>

                <p>
                    Barbie movies with progressively lower ratings and viewership are just one example of an audience growing tired of a franchise. 
                </p>

                <p>
                    In 2023, blockbusters (with some notable exceptions) underperformed drastically. 
                </p>

                <div className='grid grid-cols-2'>
                    <div className='container left-col'>
                        <p>
                            Mission Impossible: Dead Reckoning was the seventh film in the franchise. Despite generally consistent performance in the prior films, last year’s iteration bombed with a $300M profit. The last time a Mission Impossible film did this poorly, Tom Cruise – the main actor – was in the midst of public controversy.
                        </p>
                    </div>
    
                    <div className='container right-col'>
                        <img src='/img/mi_performance.png'/>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='container left-col'>
                        <p>
                            The Fast and Furious franchise has been doing worse and worse each year since 2015. Despite their bump in budget in Fast X, last year was no different. 
                        </p>
                    </div>
    
                    <div className='container right-col'>
                         <img src='/img/ff_performance.png'/>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='container left-col'>
                        <p>
                            Indiana Jones was the subject of many discussions about reboots in particular following the 15 year gap since the last Indiana Jones “revival” film. While the 2008 revisiting of the series performed well, the 2023 release barely scraped by a profit.  
                        </p>
                    </div>
    
                    <div className='container right-col'>
                         <img src='/img/ij_performance.png'/>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='container left-col'>
                    <p>
                        It’s easy to point to franchises doing badly, but it should be noted that box office performance hasn’t really recovered since the pandemic. 
                    </p>

                    <p>
                        While worldwide, there seems to be the expected increase in performance, American moviegoers aren’t engaging as much with these films. 
                    </p>
                    </div>
    
                    <div className='container right-col'>
                         <img src='/img/yearlytop50.png'/>
                    </div>
                </div>

                

                <p>
                    But why?
                </p>

                <p>
                    Here are some popular theories:
                </p>

                <div className='container px-10 text-2xl' id='theory-poll'>
                    <div>
                        <p>“There’s just too much content! Viewers don’t need six superhero movies every year” </p>
                    </div>
                    <div>
                        <p>“Viewers want original stories. We’re tired of the same franchises being rehashed over and over”</p>
                    </div>
                    <div>
                        <p>“The movies are getting worse.”</p>
                    </div>
                </div>

                <p>
                    Which resonates most with you? All or none of these might be true. The advent of streaming in the post-pandemic era is undeniably a major factor as well. Still, let’s consider some of these theories.
                </p>

                <p>
                    In an intertextual media landscape, what does originality actually mean?
                </p>

                <p>
                    Last year, only 12 of the top 50 highest grossing films in America were not based on an existing intellectual property. That number goes down to 6 if you consider films based on a real life event to be adapted, in which case there are no “original films” at all in the top 16. 
                </p>

                

                <OriginalsChart />

                <p>
                    Clearly, the films in 2023 sourced all kinds of works. Here we traced the origins of every film in the top 50 last year. Explore for yourself:
                </p>

                <ObservableChart link='https://observablehq.com/embed/6013b6d9001e883a@1816?cells=viewof+topSlider_2D%2CchartTitle%2Cuniverse_2D'/>

                <p><em>Notice the clumps during the 80’s and 70’s? <a href='https://www.vice.com/en/article/bvmkm8/how-the-20-year-trend-cycle-collapsed'>Fashion trend cycles may be getting smaller</a>, but films still seem to love the 80’s.</em></p>

                <p>
                    Our understanding of originality may vary, but ultimately, the choice falls to studios. Hollywood continues to lean on existing properties to avoid taking risks, a choice that, as we can see, is not as safe as it used to be. 
                </p>

                <p>
                    Daniel Bessner cautions in his piece, “<a href='https://harpers.org/archive/2024/05/the-life-and-death-of-hollywood-daniel-bessner/'>The Life and Death of Hollywood</a>”
                </p>
                <div className='p-6'>
                    <p className='italic text-2xl'>
                        There’s no reason to believe that this type of caution will pay off. The supposed sure shot of IP is currently misfiring: in 2023, Disney’s The Marvels fell more than $64 million short of breaking even, and its Indiana Jones sequel drastically underperformed. The Flash, for Warner Bros. Discovery, lost millions, and the company’s Shazam! Fury of the Gods flopped. (In the case of Barbie —the loudest exception—the writers, Greta Gerwig and Noah Baumbach, were given extraordinary free rein.) As Zack Stentz put it, “Hollywood is based on giving audiences what they might not know. Any attempt to drive risk out of that process is sooner or later doomed to failure.” His words played off an old adage by the screenwriter William Goldman. “Nobody knows anything,” he wrote. “Not one person in the entire motion picture field knows for certain what’s going to work.” But investments in the alchemy of the creative process do not perform well in quarterly reports.
                    </p>
                   
                </div>

                <p>
                    It’s unlikely that we’ll ever fully abandon the holy grail of IP. These films may be failing to meet expectations, but the original ones haven’t caught up. As Bessner points out, the films that were most successful in 2023 combined the appeal of existing works with (ample?) creative freedom from Gerwig and Nolan. 
                </p>

                <p>
                    Whether media is original, adapted, rebooted, or extended as a series, quality writing and creative vision are the foundation on which good art stands. As the 2023 WGA strike has shown us, studios have failed to recognize that essential role with unreasonable working conditions and heavily restricted writing freedoms. 
                </p>

                <p>
                    Not everyone can be Greta Gerwig and Christopher Nolan, and they shouldn’t have to be. 
                </p>

            </motion.div>
        </div>
    )
}

export default Main;