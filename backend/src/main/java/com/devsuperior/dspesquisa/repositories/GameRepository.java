package com.devsuperior.dspesquisa.repositories;

import com.devsuperior.dspesquisa.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository <Game, Long>{
}
