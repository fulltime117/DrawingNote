import React from 'react'
import { FunnyNFTCareer } from '../FunnyNFTCareer'
import { HomeHero } from '../HomeHero'
import { MintingIsLive } from '../MintingIsLive'
import { Provider } from '../Provider'
import { RoadMap } from '../RoadMap'
import { ChooseUS } from '../ChooseUs'
import { Contact } from '../Contact'

import {
  HomeContainer
} from './styles'

export const Home = (props) => {
  return (
    <HomeContainer id='home'>
          <section class="general-content">
        <div class="d-flex justify-content-center">
            <div class="col-10 general-content__text">
                <div class="d-flex justify-content-between position-relative pt-3 pb-2">
                    <h2 id="list of autocad commands">List of AutoCAD commands</h2>
                    <input type="text" id="keyInput" class="position-fixed" onkeyup="keyFun()"
                        placeholder="Search for names.." title="Type in a name">
                    <input type="text" id="console-input" class="position-fixed" onkeyup="consoleSearch()">
                </div>

                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="15">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">General
                                        Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="69905"><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">Q&nbsp;</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Saves current drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + D</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle coordinate
                                    display</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + G</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle grid</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + H</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle pick style</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + E</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Cycle isometric planes</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + F&nbsp;</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle running object
                                    snaps</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + I</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle&nbsp;coords</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">E</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Remove objects from a
                                    drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">x</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Breaks down a compound
                                    object</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="11">
                            <td data-celllook="4369"><span data-contrast="auto">J</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Join similar objects to form one
                                    object</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="12">
                            <td data-celllook="4369"><span data-contrast="auto">D</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Create and modifies dimension
                                    styles</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="13">
                            <td data-celllook="4369"><span data-contrast="auto">G</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Create saved sets of
                                    objects&nbsp;</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="14">
                            <td data-celllook="4369"><span data-contrast="auto">Z</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Zoom</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="15">
                            <td data-celllook="4369"><span data-contrast="auto">ESC</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Cancel current command</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <p><span
                        data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
                </p>
                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="10">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">Manage Screen
                                        Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="69905"><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 0 (zero)</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Clean screen</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 1</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open property palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl +2&nbsp;</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Design center palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 3</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open tool palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 4</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open sheet set palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 6</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span
                                    data-contrast="auto">Open&nbsp;DBConnect&nbsp;Manager</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 7</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open markup set manager
                                    palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 8</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open quick calc</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + 9</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open command-line</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span
                        data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
                </p>
                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="13">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">Toggle Drawing
                                        Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="69905"><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">F1</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Display help</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">F2</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle text screen</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">F3</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle object snap mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">F4</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle 3DOsnap</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">F5</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle&nbsp;isoplane</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">F6</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle dynamic UCS</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">F7</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle grid mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">F8</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle ortho mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">F9</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle snap mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="11">
                            <td data-celllook="4369"><span data-contrast="auto">F10</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle polar mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="12">
                            <td data-celllook="4369"><span data-contrast="auto">F11</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle object snap tracking</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="13">
                            <td data-celllook="4369"><span data-contrast="auto">F12</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Toggle dynamic input mode</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span
                        data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
                </p>
                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="21">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">General Drawing
                                        Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + N</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">New drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + S</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Save drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + O</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">Ctrl + P</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Plot dialog box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">A</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw an arc with three
                                    points</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">B</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open block dialogue box to make a
                                    block</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">BO</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a boundary&nbsp;</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">I</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Insert a block into a
                                    drawing</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">C</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a circle</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="11">
                            <td data-celllook="4369"><span data-contrast="auto">EL</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw an ellipse</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="12">
                            <td data-celllook="4369"><span data-contrast="auto">REC</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a rectangle</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="13">
                            <td data-celllook="4369"><span data-contrast="auto">PL</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a polyline</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="14">
                            <td data-celllook="4369"><span data-contrast="auto">POL</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a polygon</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="15">
                            <td data-celllook="4369"><span data-contrast="auto">L</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a line</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="16">
                            <td data-celllook="4369"><span data-contrast="auto">ML</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw multi lines</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="17">
                            <td data-celllook="4369"><span data-contrast="auto">DO</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a solid donut shape</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="18">
                            <td data-celllook="4369"><span data-contrast="auto">DT</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Single line text</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="19">
                            <td data-celllook="4369"><span data-contrast="auto">F</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw an arc between two intersecting
                                    lines</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="20">
                            <td data-celllook="4369"><span data-contrast="auto">O</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Offset an object by the
                                    distance</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="21">
                            <td data-celllook="4369"><span data-contrast="auto">RAY</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Construction line in one
                                    direction</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span
                        data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
                </p>
                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="16">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">Formatting Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="69905"><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">AP</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open application load dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">BE</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open the edit block definition dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">BH</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open hatch and the gradient dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">D</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open&nbsp;dimension style manager
                                    dialogue box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">DC</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open the design center</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">LA</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open layer manager</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">LT</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open line type manager</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">LTS</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Change the line type scale</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">LW</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open line weight settings dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="11">
                            <td data-celllook="4369"><span data-contrast="auto">MA</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Match properties of an
                                    object</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="12">
                            <td data-celllook="4369"><span data-contrast="auto">OP</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Launch options dialogue box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="13">
                            <td data-celllook="4369"><span data-contrast="auto">SSM</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open sheet set manager
                                    palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="14">
                            <td data-celllook="4369"><span data-contrast="auto">ST</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open text style dialogue box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="15">
                            <td data-celllook="4369"><span data-contrast="auto">TP</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Display tool palette</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="16">
                            <td data-celllook="4369"><span data-contrast="auto">TS</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open table style dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <span
                        data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
                </p>
                <table border="1" style="border-collapse:collapse" data-tablestyle="MsoTableGrid" data-tablelook="0"
                    aria-rowcount="16">
                    <tbody>
                        <tr aria-rowindex="1">
                            <td data-celllook="69905"><b><span data-contrast="none">3D Shortcuts</span></b><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="69905"><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="2">
                            <td data-celllook="4369"><span data-contrast="auto">3D</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Command line 3D solid
                                    potions</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="3">
                            <td data-celllook="4369"><span data-contrast="auto">Box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a cube</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="4">
                            <td data-celllook="4369"><span data-contrast="auto">Cylinder</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a cylinder</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="5">
                            <td data-celllook="4369"><span data-contrast="auto">EXT</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Extrude a face</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="6">
                            <td data-celllook="4369"><span data-contrast="auto">IN</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Intersect an object</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="7">
                            <td data-celllook="4369"><span data-contrast="auto">REV</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Revolve an object about an
                                    axis</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="8">
                            <td data-celllook="4369"><span data-contrast="auto">RR</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open render dialogue box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="9">
                            <td data-celllook="4369"><span data-contrast="auto">SE</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Section</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="10">
                            <td data-celllook="4369"><span data-contrast="auto">SL</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Slice a solid</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="11">
                            <td data-celllook="4369"><span data-contrast="auto">SU</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Subtract selection from
                                    solid</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="12">
                            <td data-celllook="4369"><span data-contrast="auto">TOR</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw torus shape</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="13">
                            <td data-celllook="4369"><span data-contrast="auto">UC</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Display UCS manager dialogue
                                    box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="14">
                            <td data-celllook="4369"><span data-contrast="auto">UCS</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">UCS command-line options</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="15">
                            <td data-celllook="4369"><span data-contrast="auto">VPORTS</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Open viewport dialogue box</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                        <tr aria-rowindex="16">
                            <td data-celllook="4369"><span data-contrast="auto">WE</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                            <td data-celllook="4369"><span data-contrast="auto">Draw a wedge</span><span
                                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>
    <section>
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <img src="../assets/img/autocad-shortcuts-guide-2_orig.jpg" alt="" />
                <img src="../assets/img/AutoCAD-keyboard-shortcuts-1.jpg" alt="" />
            </div>
        </div>
    </section>
    </HomeContainer>
  )
}
