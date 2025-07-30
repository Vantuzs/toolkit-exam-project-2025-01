import React from 'react';
import style from './HeaderMiddle.module.scss'

const HeaderMiddle = () => {
    return (
        <div className={style['header-mid']}>
            <ul>
                <li className={style['bigger-submenu']}><div className={style['no-link']}>Domains for Sale</div> 
                <div className={style['sub-menu-large']}>
                    <div className={style['main-links-left']}>
                        <a href="" className={style['sub-menu-link']}>
                            <div className={style.images}>
                                <img loading='lazy' className={style.image} src="	https://www.atom.com/public/images/common/cdm_icon.svg" alt="Curated Domain Marketplace" />
                            </div>
                            <div className={style['link-details']}>
                                <div className={style['m-head']}>
                                    Premium Domain Marketplace
                                    <img width='7' height='12' className={style.arrow} src="https://img.atom.com/public/images/payments/arrow_right_black.svg" alt="arrow" />
                                </div>
                                <p>Explore 300,000+ expert-curated, brandable domains to elevate your business.</p>
                            </div>
                        </a>

                        <a href="" className={style['sub-menu-link']}>
                            <div className={style.images}>
                                <img loading='lazy' className={style.image} src="https://www.atom.com/public/images/common/upm_icon.svg" alt="Ultra Premium Marketplace" />
                            </div>
                            <div className={style['link-details']}>
                                <div className={style['m-head']}>
                                    Ultra Premium Marketplace
                                    <img width='7' height='12' className={style.arrow} src="https://img.atom.com/public/images/payments/arrow_right_black.svg" alt="arrow" />
                                </div>
                                <p>Discover the world’s most coveted and powerful domains for top-tier brands.</p>
                            </div>
                        </a>

                        <a href="" className={style['sub-menu-link']}>
                            <div className={style.images} id={style['last-images-main-links-left']}>
                                <img loading='lazy' className={style.image} src="https://www.atom.com/public/images/common/sapphire_icon.svg" alt="Sapphire Marketplace" />
                            </div>
                            <div className={style['link-details']}>
                                <div className={style['m-head']}>
                                    Sapphire Marketplace
                                    <img width='7' height='12' className={style.arrow} src="https://img.atom.com/public/images/payments/arrow_right_black.svg" alt="arrow" />
                                </div>
                                <p>Find one-word domains with modern extensions like .ai, .io, and .xyz.</p>
                            </div>
                        </a>

                    </div>

                    <div className={style['top-collections']}>
                        <h3>Top Domain Collections</h3>
                        <a href="#">Premium Domains</a>
                        <div>
                        <a href="#">.ai Domains</a>
                        <span>Popular</span>
                        </div>
                        <a href="#">Domain Auction </a>
                        <a href="#">Short Domains</a>
                        <a href="#">One Word Domains</a>
                        <a href="#">3 Letter Domains</a>
                        <a href="#">4 Letter Domains</a>
                        <a href="#">5 Letter Domains</a>
                        <a href="#">Country-Specific Domains</a>
                    </div>

                    <a href="" className={style['get-started']}>
                        <div className={style.images2}>
                            <img className={style.image} src="https://www.atom.com/public/images/common/get_started.png" />
                        </div>
                        <h4>
                            <img loading='lazy' src="https://img.atom.com/public/images/common/search.svg" alt="Magnifier" />
                            Get Started
                            <img loading='lazy' src="https://img.atom.com/public/images/payments/arrow_right_black.svg" alt="arrow" className={style.arrow}/>
                        </h4>
                        <p>Find your perfect domain today and buy instantly in the Atom.com marketplace.</p>
                    </a>
                    </div>

                    
                    </li>
                <li className={style['bigger-submenu']}><div className={style['no-link']}>Naming & Branding</div>
                    <div className={`${style["sub-menu-large"]} ${style["brand-naming"]}`}>
                        <div className={style['main-links-left']}>
                            <a href="https://www.atom.com/branding-marketing-naming-contests" class={style['sub-menu-link']}>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Start a Naming Contest
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Launch a name and domain contest today for 1000s of unique name ideas!</p>
                                            </div>
                                        </a>
                            <div class={style['top-collections']}>
                                            <h3>Branding Contests</h3>
                                            <a href="https://www.atom.com/logos">Logo Contests</a>
                                            <a href="https://www.atom.com/taglines">Tagline Contests</a>
                                            <a href="https://www.atom.com/brand-identity-design">Brand Identity Contests</a>
                                            <a href="https://www.atom.com/brand-naming-agency">Brand Naming Agency</a>
                                        </div>
                        </div>
                        <div class={style['top-collections']}>
                                        <h3>Contest Details</h3>
                                        <a href="https://www.atom.com/how-it-works">How It Works</a>
                                        <a href="https://www.atom.com/pricing">Contest Pricing</a>
                                        <a href="https://www.atom.com/our-work">Our Work</a>
                                        <a href="https://www.atom.com/winners">Recent Winners</a>
                                        <a href="https://www.atom.com/branding-marketing-naming-contests">Active Contests</a>
                                        <a href="https://www.atom.com/join-as-creative">Become a Creative </a>
                                    </div>
                                    <a class={style['get-started']} href="/managed-contests">
                                        <div class={style.images2}>
                                            <img width="100%" height="202" loading="lazy" class={style.image} src="	https://www.atom.com/public/images/common/agency_style.png"/>
                                        </div>
                                        <h4>
                                            Agency Style Experience
                                            <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                        </h4>
                                        <p>Work with a naming and branding expert in our better-than-an-agency managed contests.</p>
                                    </a>
                    </div>
                </li>
                <li className={style['bigger-submenu']}><div className={style['no-link']}>Research & Testing</div>
                    <div className={`${style['sub-menu-large']} ${style['research-testing']}`}>
                        <div class={style['main-links-left']}>
                                        <a href="https://www.atom.com/research" class={style['sub-menu-link']}>
                                            <div class={style.images}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/audience_research.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Audience Research
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Business decisions are easier with data. Run targeted surveys on just about anything, and get real data fast!</p>
                                            </div>
                                        </a>
                                    </div>
                        <div class={style['top-collections']}>
                                        <a href="#" class={style.research}>Name Testing</a>
                                        <a href="#" class={style.research}>Design Testing</a>
                                        <a href="#" class={style.research}>Logo Testing</a>
                                        <a href="#" class={style.research}>Product Testing</a>
                                        <a href="#" class={style.research}>Copy Testing</a>
                                        <a href="#" cclass={style.research}>Customer Development</a>
                                    </div>
                    </div>
                </li>
                <li className={style['bigger-submenu']}><div className={style['no-link']}>Trademarks</div>
                    <div class={`${style['sub-menu-large']} ${style.trademarks}`}>
                                    <div class={style['main-links-left']}>
                                        <a href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package" class={style['sub-menu-link']}>
                                            <div class={style.images}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/trademark_filling.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Trademark Filing 
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Protect your brand with trademark services spanning search to filing.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class={style['top-collections']}>
                                        <a href="https://helpdesk.atom.com/en/articles/389625-trademark-research-service7" class={style.research}>Trademark Research </a>
                                        <a href="/trademark-registration" class={style.research}>Trademark Consultation</a>
                                        <a href="/free-trademark-search" class={style.research}>Free Trademark Checker</a>
                                    </div>
                                </div>
                </li>
                <li className={style['bigger-submenu']}><div className={style['no-link']}>Resources</div>
                <div className={`${style['sub-menu-large']} ${style.resources}`}>

                
                    <div class={`${style['main-links-left']} ${style.bsg}`}>
                                        <a href="https://www.atom.com/business-name-generator" class={style['sub-menu-link']}>
                                            <div class={style.images}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/bsg.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Business Name Generator
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Be inspired by our AI-powered generators! Get 1000s of name ideas in seconds.</p>
                                            </div>
                                        </a>
                                        <a href="https://www.atom.com/domain-name-generator" class={style['name-generator']}>Domain Name Generator</a>
                                        <a href="https://www.atom.com/startup-name-generator" class={style['name-generator']}>Startup Name Generator</a>
                                        <a href="https://www.atom.com/product-name-generator" class={style['name-generator']}>Product Name Generator</a>
                                        <a href="https://www.atom.com/logo-maker" class={`${style['sub-menu-link']} ${style['ai-logo']}`}>
                                            <div class={style.images}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/ai.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    AI Logo Maker
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Create eye-catching logos in minutes and make your brand memorable.</p>
                                            </div>
                                        </a>
                                    </div>
                    <div class={`${style['main-links-left']} ${style.tools}`}>
                                        <a href="https://www.atom.com/brand-alignment" class={style['sub-menu-link']}>
                                            <div class={style.images} style={{width:'130px'}}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/alignment_tool.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Brand Alignment Tool
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Make the right naming choice with our AI-powered brand alignment tool.</p>
                                            </div>
                                        </a>
                                        <a href="#" class={style['sub-menu-link']}>
                                            <div class={style.images} style={{width:'104px'}}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/atom_radar.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    AtomRadar
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Exclusive naming and branding research from Atom.com.</p>
                                            </div>
                                        </a>
                                        <a href="#" class={style['sub-menu-link']}>
                                            <div class={style.images} style={{width:'120px'}}>
                                                <img  loading="lazy"  class={style.image} src="https://www.atom.com/public/images/common/brand_book.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Build a Brandbook
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Create a free brand bible in minutes using our AI-assisted builder.</p>
                                            </div>
                                        </a>
                                        <a href="#" class={style['sub-menu-link']}>
                                            <div class={style.images} style={{width:'99px'}}>
                                                <img loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/start_up.svg" alt="Curated Domain Marketplace"/>
                                            </div>
                                            <div class={style['link-details']}>
                                                <div class={style['m-head']}>
                                                    Startup Toolkit
                                                    <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                                </div>
                                                <p>Explore apps and services to help your startup thrive.</p>
                                            </div>
                                        </a>
                                    </div>
                    <div class={style['top-collections']}>
                                                <h3>Atom.com</h3>
                                                <a href="#">About Us</a>
                                                <a href="#">Atom Blog</a>
                                                <a href="#">Testimonials</a>
                                                <div>
                                                <a href="#">Partner with us</a> <span>AtomConnect</span>
                                                </div>
                                                <a href="#">Affiliate</a>
                                        </div>
                    <a class={style['get-started']} href="#">
                                        <div class={style.images2}>
                                            <img width="100%" height="201" loading="lazy" class={style.image} src="https://www.atom.com/public/images/common/domain_score.svg"/>
                                        </div>
                                        <h4>
                                            AI Domain Appraisal Tool
                                            <img width="7" height="12" class={style.arrow} loading="lazy" alt="arrow" src="https://img.atom.com/public/images/payments/arrow_right_black.svg"/>
                                        </h4>
                                        <p>Discover the value of your domains, based on 50+ data points and powered by effective AI.</p>
                                    </a>
                                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMiddle;
