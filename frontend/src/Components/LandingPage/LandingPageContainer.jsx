import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPageContainer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div class="m-2 flex h-16 items-center justify-evenly font-semibold">
                <div class="w-1/2">
                    <img src="" alt="" />
                    <p>Logo</p>
                </div>
                <div class="hover:border-b-2 hover:border-b-[#143fcd] hover:text-[#143fcd]"><Link to="/profile">For job seekers</Link></div>
                <div class="hover:border-b-2 hover:border-b-[#143fcd] hover:text-[#143fcd]"><Link to="/recruiter/access">For companies</Link></div>
                <div className='flex gap-2'>
                    <button class="rounded border border-[#d4d4d4] bg-transparent py-[8px] px-[16px] font-semibold text-black hover:border-[#143fcd] hover:bg-[#eaebff] hover:text-[#143fcd]" onClick={() => navigate("/login")}>Log In</button>
                    <button class="rounded border border-[#d4d4d4] bg-black py-[8px] px-[16px] font-semibold text-white hover:border-[#143fcd] hover:bg-[#143fcd]" onClick={() => navigate("/signup")}>Sign Up</button></div>
            </div>
            <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />


            <div class="flex justify-end">
                <div class="m-12 p-3">
                    <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%20283-min.png" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 991px) 84vw, (max-width: 1279px) 41vw, 43vw" srcset="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-500.png 500w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-800.png 800w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%20283-min.png 1350w" alt="" class="_3d-graphic" />
                </div>

                <div class="     flex w-[50%] flex-col items-start p-[60px]">
                    <div>
                        <p class="font-semibold">GOT TALENT?</p>
                    </div>
                    <div class="my-6 text-[2.5rem] font-bold">
                        <p>Why job seekers</p>
                        <p>loves us</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" alt="" srcset="" />
                        <p class="ml-3">Unique jobs at startups and tech companies you can't find anywhere else</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" alt="" srcset="" />
                        <p class="ml-3">Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" alt="" />
                        <p class="ml-3">Everything you need to know to job search - including seeing salary and stock options upfront when looking</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" alt="" />
                        <p class="ml-3">Connect directly with founders at top startups - no third party recruiters allowed</p>
                    </div>
                    <div><button class="mr-2 rounded border border-[#d4d4d4] bg-transparent py-[8px] px-[16px] font-semibold text-black hover:border-[#143fcd] hover:bg-[#eaebff] hover:text-[#143fcd]">Learn More</button> <button class="rounded border border-[#d4d4d4] bg-black py-[8px] px-[16px] font-semibold text-white hover:border-[#143fcd] hover:bg-[#143fcd]">Sign Up Now</button></div>
                </div>
            </div>
            <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />


            <div class="flex justify-end">
                <div class="flex w-[50%] flex-col items-start p-[60px]">
                    <div>
                        <p class="font-semibold">NEED TALENT?</p>
                    </div>
                    <div class="my-6 text-[2.5rem] font-bold">
                        <p>Why job recruiter</p>
                        <p>loves us</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128716b37e63bb_Team.svg" alt="" srcset="" />
                        <p class="ml-3">Thousands of responsive and startup-ready candidates, with all the information you need to vet them</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128708fd7e63b6_Settings.svg" alt="" srcset="" />
                        <p class="ml-3">Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</p>
                    </div>
                    <div class="my-4 flex">
                        <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287316a7e63c1_Template.svg" alt="" />
                        <p class="ml-3">A free applicant tracking system, or free integration with any ATS you may already use</p>
                    </div>
                    <div class="my-4 flex">
                        <p class="ml-3">Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.</p>
                    </div>
                    <div><button class="mr-2 rounded border border-[#d4d4d4] bg-transparent py-[8px] px-[16px] font-semibold text-black hover:border-[#143fcd] hover:bg-[#eaebff] hover:text-[#143fcd]">Learn More</button> <button class="rounded border border-[#d4d4d4] bg-black py-[8px] px-[16px] font-semibold text-white hover:border-[#143fcd] hover:bg-[#143fcd]">Sign Up Now</button></div>
                </div>
                <div class="m-12 p-3">
                    <img src="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%20284-min.png" loading="lazy" sizes="(max-width: 479px) 84vw, (max-width: 767px) 83vw, (max-width: 991px) 79vw, (max-width: 1279px) 42vw, 43vw" srcset="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%2520284-min-p-500.png 500w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%2520284-min-p-800.png 800w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%20284-min.png 1350w" alt="" class="_3d-graphic" />
                </div>
            </div>
            <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />


            <div class="mx-20 mt-8 h-20 border border-[d4d4d4] p-2">
                <div class="flex items-center justify-around p-1.5">
                    <div class="w-8/12"><input class="border border-[d4d4d4] hover:border-[#143fcd] w-full rounded p-2 text-gray-700 leading-tight" id=" email" type="text" placeholder="Your email" /></div>
                    <div>
                        <button class="rounded border border-[#d4d4d4] bg-black py-[8px] px-[16px] font-semibold text-white hover:border-[#143fcd] hover:bg-[#143fcd]">Sign Up</button>
                    </div>
                    <div>
                        <p>or</p>
                    </div>
                    <div>
                        <button class="flex rounded border border-[#d4d4d4] bg-transparent py-[8px] px-[16px] font-semibold text-black hover:border-[#143fcd] hover:bg-[#eaebff] hover:text-[#143fcd]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-7 w-7" fill="currentColor" style={{ color: "#ea4335" }} viewBox="0 0 24 24">
                                <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd" /></svg
                            >Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-20 mt-2 flex justify-end">
                <p>Already have an account? <a class="underline"> Log in</a></p>
            </div>

        </div>
    )
}

export { LandingPageContainer }