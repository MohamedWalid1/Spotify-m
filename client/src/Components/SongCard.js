import React from 'react';


const SongCard = ({ name, id }) => {
  return (
    

<div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">{name}</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>{id}</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

);
}

export default SongCard;
